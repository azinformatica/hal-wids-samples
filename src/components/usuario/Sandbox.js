import store from '@/commons/store'

class Sandbox {

    getUserName() {
        return store.state.wids.userName
    }

}

const sandbox = new Sandbox()

export default sandbox