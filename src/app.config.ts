const pages = ['pages/index/index', 'pages/my/index', 'pages/icons/index']
const navigationBarBackgroundColor = '#FFF'

import { AppConfig as WechatAppConfig } from 'remax/wechat'
import { AppConfig as AliAppConfig } from 'remax/ali'
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao'
import { AppConfig as WebAppConfig } from 'remax/web'

export const wechat: WechatAppConfig = {
    pages,
    window: {
        navigationBarBackgroundColor: navigationBarBackgroundColor,
        navigationBarTextStyle: 'black',
        navigationBarTitleText: 'Remax One Wechat',
    },
    tabBar: {
        color: '#bebebe',
        selectedColor: '#2780d9',
        backgroundColor: '#FFF',
        position: 'bottom',
        list: [
            {
                text: 'Home',
                pagePath: 'pages/index/index',
                iconPath: 'assets/tab_bar/home.png',
            },
            {
                text: 'Icons',
                pagePath: 'pages/icons/index',
            },
            {
                text: 'My',
                pagePath: 'pages/my/index',
            },
        ],
    },
}

export const ali: AliAppConfig = {
    pages,
    window: {
        defaultTitle: 'Remax One Ali',
        titleBarColor: navigationBarBackgroundColor,
    },
    tabBar: {
        items: [
            {
                pagePath: 'pages/index/index',
                name: 'Home',
                icon: 'assets/home.png',
            },
            {
                pagePath: 'pages/my/index',
                name: 'My',
                icon: 'assets/my.png',
            },
        ],
    },
}

export const toutiao: ToutiaoAppConfig = {
    pages,
    window: {
        navigationBarTitleText: 'Remax One Toutiao',
        navigationBarBackgroundColor: navigationBarBackgroundColor,
    },
}

export const web: WebAppConfig = {
    pages,
    title: 'Remax One Web',
    // tabBar: {
    //   items:[{
    //     pagePath: 'pages/index/index',
    //     name: 'Home',
    //     icon: 'assets/home.png'
    //   }, {
    //     pagePath: 'pages/my/index',
    //     name: 'My',
    //     icon: 'assets/my.png'
    //   }]
    // },
}
