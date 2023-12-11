import * as React from 'react';
import { IoC } from "@vgerbot/use-service-react";

export function App(props: React.PropsWithChildren<any>) {
    return <IoC>{props.children}</IoC>
}