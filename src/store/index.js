import { createStore, Store } from 'vuex';
// 持久化管理
// import createPersistedstate from 'vuex-persistedstate'
import modules from './modules';


export default createStore({
    modules
})