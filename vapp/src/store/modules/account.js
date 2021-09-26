
const state = {
    inn: null,
    fio: null,
    sum: '',
    typeGrant: null,
    orgName: null,

    finish: false,
};

const getters = {


    inn(state) {
        return state.inn;
    },

    finish(state) {
        return state.finish;
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

    orgName(state) {
        return state.orgName;
    },

};

const actions = {


    async login({commit, dispatch, getters}, inn) {
        commit('setInn', inn)
        commit('setOrgName', 'ООО Южное бутово')
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

    setOrgName(state, orgName) {
        state.orgName= orgName;
    },

    setFinish(state, finish) {
        state.finish = finish;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};


