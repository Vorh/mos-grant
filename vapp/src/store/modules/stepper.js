
const state = {

    complete1: false,
    complete2: false,
    complete3: false,

    step: null,
};

const getters = {


    complete1(state) {
        return state.complete1;
    },

    step(state) {
        return state.step;
    },

    complete2(state) {
        return state.complete2;
    },

    complete3(state) {
        return state.complete3;
    },

};

const actions = {


    resetSteps({commit}){
        commit('setStep', 1)
        commit('setComplete1', false);
        commit('setComplete2', false);
        commit('setComplete3', false);
    }

};

const mutations = {

    setComplete1(state, value) {
        state.complete1 = value;
    },

    setComplete2(state, value) {
        state.complete2 = value;
    },

    setComplete3(state, value) {
        state.complete3 = value;
    },

    setStep(state, value) {
        state.step = value;
    },


};

export default {
    state,
    getters,
    actions,
    mutations
};


