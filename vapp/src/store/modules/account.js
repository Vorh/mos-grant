
const state = {
    inn: null,
    fio: null,
};

const getters = {


    inn(state) {
        return state.inn;
    },

    fio(state) {
        return state.fio;
    },


};

const actions = {


    async login({commit, dispatch, getters}, inn) {
        commit('setInn', inn)
        commit('setFio', 'Павлов Я.В.')
    },


};

const mutations = {

    setInn(state, inn) {
        state.inn = inn;
    },

    setFio(state, fio) {
        state.fio = fio;
    },


};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};


