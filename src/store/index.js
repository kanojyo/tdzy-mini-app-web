import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import login from '@/store/modules/login.js';
import selector from '@/store/modules/selector.js';

export default new Vuex.Store({
    modules: {
        login,
        selector,
    },
})