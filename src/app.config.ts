const pages = [
  'pages/index/index',
  'pages/my/index',
  "pages/icons/index"
];
const color = '#282c34';

import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AliAppConfig } from 'remax/ali';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';
import { AppConfig as WebAppConfig } from 'remax/web';

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: color,
    navigationBarTitleText: 'Remax One Wechat',
  },
  tabBar: {
    color: '#000',
    selectedColor: '#F00',
    backgroundColor: '#DDD',
    position: 'bottom',
    list: [{
      text: 'Home',
      pagePath: 'pages/index/index',
      iconPath: 'assets/tab_bar/home.png'
    }, {
      text: 'Icons',
      pagePath: 'pages/icons/index'
    }, {
      text: 'My',
      pagePath: 'pages/my/index'
    }]
  }
};

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: 'Remax One Ali',
    titleBarColor: color,
  },
  tabBar: {
    items:[{
      pagePath: 'pages/index/index',
      name: 'Home',
      icon: 'assets/home.png'
    }, {
      pagePath: 'pages/my/index',
      name: 'My',
      icon: 'assets/my.png'
    }]
  }
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: 'Remax One Toutiao',
    navigationBarBackgroundColor: color,
  },
};

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
};
