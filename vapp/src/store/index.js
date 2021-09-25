import Vue from 'vue';
import Vuex from 'vuex';
import requests from "./modules/requests";
import account from "./modules/account";
import stepper from "./modules/stepper";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        requests,
        account,
        stepper
    }
});
