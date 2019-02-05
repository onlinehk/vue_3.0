import Vue from 'vue';
import Vuex from 'vuex';
// modules
import count from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
  // 將整理好的 modules 放到 vuex 中組合
  modules: {
    count
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});