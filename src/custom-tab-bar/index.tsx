import { Icon, TabBar } from '@kqinfo/ui'
import type { TabBarItemProps } from '@kqinfo/ui/es/tab-bar'

const items: TabBarItemProps[] = [
    {
        title: 'Home',
        icon: <Icon name="kq-home"></Icon>,
        index: 0,
    },
    {
        title: 'My',
        icon: <Icon name="kq-album"></Icon>,
        index: 1,
    },
]

export default function CustomTabbar() {
    return <TabBar items={items}></TabBar>
}
