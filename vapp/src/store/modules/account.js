
const state = {
    inn: null,
    fio: null,
    sum: null,
    typeGrant: null,
};

const getters = {


    inn(state) {
        return state.inn;
    },

    fio(state) {
        return state.fio;
    },

    typeGrant(state) {
        return state.typeGrant;
    },

    sum(state) {
        return state.sum;
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


    setTypeGrant(state, typeGrant) {
        state.typeGrant = typeGrant;
    },

    setSum(state, sum) {
        state.sum= sum;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};


