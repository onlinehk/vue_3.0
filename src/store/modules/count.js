const nameSpace = 'count';

const namespaced = true;

const types = {
    INCREASE: nameSpace + '/INCREASE',
    DECREASE: nameSpace + '/DECREASE',
    GET_DATA: nameSpace + '/GET_DATA',
    LOADING: nameSpace + '/LOADING',
}

// count state 必須是 Object
const state = {
    countNum: 10,
    get_data: false,
    is_loading: false
}

// actions 也是以 Object 形式建構。
const actions = {
    actionIncrease({ commit }, num) {
        commit(types.INCREASE, num);
    },
    actionDecrease({ commit }, num) {
        commit(types.DECREASE, num);
    },
    actionGetData({ commit }, one) {
        console.log('actionGetData');
        commit(types.LOADING);
        let url;
        if (one) {
            url = 'https://jsonplaceholder.typicode.com/todos/1';
        } else {
            url = 'https://jsonplaceholder.typicode.com/todos';
        }
        console.log(url)
        fetch(url, { method: 'get' })
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                commit(types.GET_DATA, json);
            })
    }
}

// mutations
const mutations = {
    [types.INCREASE](state, num) {
        state.countNum += num;
        console.log(nameSpace + '/INCREASE', num, 'state?', state.countNum);
    },
    [types.DECREASE](state, num) {
        state.countNum -= num;
        console.log(nameSpace + '/DECREASE', num, 'state?', state.countNum);
    },
    [types.GET_DATA](state, payload) {
        state.get_data = payload;
        state.is_loading = false;
    },
    [types.LOADING](state) {
        state.is_loading = true;
    },
}

/*
    因為我們把 vuex 所有職權都寫在同一隻檔案，
    所以必須要 export 出去給最外層 index.js 組合使用
*/
export default {
    namespaced,
    state,
    actions,
    mutations
}