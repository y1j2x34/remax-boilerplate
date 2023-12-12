import { Atom } from '@/hooks/useService'

export class CounterService {
    @Atom
    counter = 0

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
