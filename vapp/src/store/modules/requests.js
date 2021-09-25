
const state = {
    requests: [
        {
            id: '0x1bbe067bb0fc732f88f5bc487a195a3b7d94e743fb0012834a73a38d662f581f',
            date: '25.09.2021',
            orgName: 'Не Яндекс Лавка',
            type: 'Субсидии для предприятия общепита',
            inn: '9718101499',
            status: 'Не прошла',
            sum: '800 000р'
        },
        {
            id: '0x1bbe067bb02c732f88f5bc487a195a3b7d94e743fb0012834a73a38d662f581f',
            date: '21.09.2021',
            orgName: 'Граница',
            type: 'Субсидия на онлайн-продвижение товаров, работ и услуг',
            inn: '7714326836',
            status: 'Выплачена',
            sum: '400 000р'
        },
        {
            id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0012834a73a38d662f581f',
            date: '29.08.2021',
            type: 'Субсидии для франчайзи',
            orgName: 'Белый ветер',
            inn: '7706413341',
            status: 'Выплачена',
            sum: '700 000р'
        },
    ],

};

const getters = {


    requests(state) {
        return state.requests;
    },


};

const actions = {


    async addRequest({commit, dispatch, getters}, request) {
        getters.requests.push(request);
        commit('setRequests', getters.requests)
    },


};

const mutations = {

    setRequests(state, requests) {
        state.requests = requests;
    },


};

export default {
    state,
    getters,
    actions,
    mutations
};


