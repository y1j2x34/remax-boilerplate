import * as React from 'react';
import { View, Image } from 'remax/one';
import styles from './index.css';
import { CounterService } from '@/services/CounterService';
import { Button, Icon } from '@kqinfo/ui';
import { IconFont } from '@/components/icon-font';
import { useService } from '@/hooks/useService';

export default () => {
  const service = useService(CounterService);
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
        <Button type="primary" onTap={() => {
          service.increment()
        }} >
          <Icon name="kq-xiangji"></Icon>
          点我增加计数
        </Button>
        <Button type="attract" onTap={() => {
          service.decrement();
        }}>
          <IconFont type="minus"></IconFont>
          点我减少计数
        </Button>
        <View>
          计数2: {service.counter}
        </View>
      </View>
    </View>
  );
};
