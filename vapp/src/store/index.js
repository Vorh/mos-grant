import Vue from 'vue';
import Vuex from 'vuex';
import requests from "./modules/requests";
import account from "./modules/account";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        requests,
        account
    }
});
