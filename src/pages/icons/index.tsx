import * as React from 'react';
import { IconFont } from "@/components/icon-font";
import { List, ListItem, Search } from "@kqinfo/ui";

const icons = [
'tuichu',
'fanhui',
'facebook',
'twitter',
'xiangyou',
'right',
'fanhui1',
'fenxiang',
'xiangxia',
'xiangxia1',
'xiangxia2',
'suofang',
'chexiao',
'esc',
'chexiao1',
'iconfont',
'suoding',
'bianji',
'shoucang2',
'xinjian',
'shoucang1',
'gongkai',
'gouwuche1',
'zhongwen',
'shangchuan',
'yingwen',
'gouwuche2',
'shanchu',
'xiazai',
'sousuo',
'dashang',
'xiangmu',
'fuzhidaima1',
'wofaqi',
'xiangmuchengyuan',
'gengduo',
'wocanyu',
'lishi',
'piliang',
'shijian',
'gonggao',
'weixin',
'weibo',
'gerenzhanghu',
'tianjiachengyuan',
'soutubiao',
'souren',
'yuzhanghao',
'biaoqing',
'qq',
'weibo1',
'zuoxuan',
'fangda2',
'zuo2',
'suoxiao',
'you2',
'suoxiao2',
'youxuan2',
'zuo',
'zuoxuan2',
'shang',
'shang2',
'youxuan',
'xia2',
'fangda',
'xia',
'you',
'zhuanrang',
'dianzan',
'huifu',
'saoyisao',
'shuoming',
'jinggao',
'jieshi',
'youxiang',
'guanbi',
'qunzhu',
'fuzhichenggong',
'weijiaru',
'daishenhe',
'shenhetongguo',
'shenhejujue',
'xinjiantubiaoku',
'tubiaoku',
'gouwuche',
'huidingbu',
'dianzan1',
'morentouxiang',
'paixu',
'wenjian',
'github',
'yuzhanghao1',
'weibo2',
'you1',
'zuo1',
'shang1',
'iconfont1',
'gonggaodayi',
'gongnengjieshao',
'tubiaohuizhi',
'daimayingyong',
'zhifubao',
'alibaba',
'xiaomi',
'zhongguodianxin',
'tianmao',
'alimama',
'zhubajie',
'tengxunwang',
'aliyun',
'taobaowang',
'anzhuo',
'ios',
'pcduan',
'qingchu',
'huizhiguize',
'zhizuoliucheng',
'fuzhidaima',
'fankui1',
'weitijiao',
'chexiao2',
];
export default function Index() {
    const [search, setSearch] = React.useState<string>();
    const listRef = React.useRef<{
        refreshList: (retainList?: boolean) => Promise<void>;
    }>(null)
    const getList = React.useCallback(async () => {
        const items = icons.filter(it => {
            if(!search) {
                return true;
            }
            return it.indexOf(search) > -1 || search.indexOf(it) > -1;
        });
        return {
            list: items,
            pageNum: 0,
            pageSize: items.length,
            total: items.length
        }
    }, [search])
    return <>
        <Search showBtn onConfirm={setSearch}></Search>
        <List ref={listRef} getList={getList} renderItem={(icon) => {
            return <ListItem
                style={{
                    background: 'white'
                }}
                key={icon}
                title={icon}
                subtitle={icon}
                imgFooter={
                    <IconFont type={icon}></IconFont>
                }
            ></ListItem>
        }}></List>
    </>
}