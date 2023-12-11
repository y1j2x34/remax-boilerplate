import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.css';
import { useService } from '@vgerbot/use-service-react';
import { CounterService } from '@/services/CounterService';
import { Observer } from 'mobx-react';

export default () => {
  const service = useService(CounterService);
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
        <View onTap={() => service.increment()}>
          点我增加计数
        </View>
        <View onTap={() => service.decrement()}>
          点我减少计数
        </View>
        <View className={styles.Text}>
          <Observer>{
            () => {
              return <>{service.counter}</>
            }
          }</Observer>
        </View>
      </View>
    </View>
  );
};
