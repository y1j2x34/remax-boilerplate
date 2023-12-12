import * as React from 'react';
import { IoC } from './hooks/useService';

export const App = (props: React.PropsWithChildren<any>) => {
    return <IoC>{props.children}</IoC>
};