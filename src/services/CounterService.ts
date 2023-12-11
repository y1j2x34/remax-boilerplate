import { Observable } from '@vgerbot/use-service-react';
import { action, observable } from 'mobx';

@Observable()
export class CounterService {
    @observable
    counter = 0;

    @action
    increment() {
        this.counter++
    }
    decrement() {
        this.counter--
    }
    incrementAsync() {
        setTimeout(() => {
            this.counter++
        }, 1000)
    }
}
