
const state = {
    requests: [],


};

const getters = {


    requests(state) {
        return state.requests;
    },


};

const actions = {


    async getRequests({commit, dispatch, getters}) {


    },


};

const mutations = {

    setRequests(state, requests) {
        state.requests = requests;
    },


};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};


