import * as React from 'react'
import { ApplicationContext, Mark } from '@vgerbot/ioc'
import type { Newable } from '@vgerbot/ioc/dist/types/Newable'
import { useRef } from 'react'
import { PrimitiveAtom, atom, useAtom } from 'jotai'
import type { MemberKey } from '@vgerbot/ioc/dist/types/MemberKey'

const MARK_AS_ATOM_PROPERTY = Symbol('mark_as_atom_property')

export const Atom = Mark(MARK_AS_ATOM_PROPERTY)

const IoCContext = React.createContext<ApplicationContext | undefined>(undefined)

export function IoC(props: React.PropsWithChildren<{}>) {
    const appCtxRef = useRef<ApplicationContext>()

    if (!appCtxRef.current) {
        const appCtx = (appCtxRef.current = new ApplicationContext())
        appCtx.registerInstAwareProcessor(
            class {
                afterInstantiation<T>(instance: T) {
                    const constructor = (instance as any).constructor as Newable<any>
                    const classMetadata = appCtx.getClassMetadata(constructor)
                    const members = classMetadata.getAllMarkedMembers()
                    const atoms = new Map<MemberKey, PrimitiveAtom<any>>()

                    members.forEach((member) => {
                        const markInfo = classMetadata.getMembersMarkInfo(member)
                        if (!markInfo[MARK_AS_ATOM_PROPERTY]) {
                            return
                        }
                        atoms.set(member, atom((instance as any)[member]))
                    })
                    constructor.prototype[MARK_AS_ATOM_PROPERTY] = atoms

                    return instance
                }
            },
        )
    }
    return React.createElement(
        IoCContext.Provider,
        {
            value: appCtxRef.current,
        },
        props.children,
    )
}

export function useService<T>(ctor: Newable<T>) {
    const context = React.useContext(IoCContext)

    if (!context) {
        throw new Error(``)
    }
    const instance = context.getInstance(ctor)!

    const atoms: Map<MemberKey, PrimitiveAtom<any>> = (instance as any)[MARK_AS_ATOM_PROPERTY]

    atoms.forEach((atom, member) => {
        const [value, set] = useAtom(atom)
        Object.defineProperty(instance, member, {
            get: () => value,
            set: (newValue) => {
                set(newValue)
            },
        })
    })
    return instance
}
