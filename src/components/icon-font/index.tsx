import * as React from 'react';
import Icon from 'remax-iconfont-component';

export function IconFont(props: {
    type: string;
}) {
    return <Icon type={'icon-' + props.type}></Icon>
}