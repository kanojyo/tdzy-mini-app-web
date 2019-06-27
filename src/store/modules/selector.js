import { office, yzList, department, category } from "@/api/selector.js";

const states = {
    state:{
        laboratory: [], //  科室
        yzList: [], //  医助
        department: [],  //  部门
        category: [],  //  文章分类
        channel: [
            {type: 1, value: 'AppStore'},
            {type: 2, value: '应用宝'},
            {type: 3, value: '360手机助手'},
            {type: 4, value: '百度手机助手'},
            {type: 5, value: 'oppo软件商店'},
            {type: 6, value: '华为应用市场'},
            {type: 7, value: '小米应用商店'},
            {type: 8, value: 'vivo应用商店'},
            {type: 9, value: 'alpha'},
            {type: 10, value: '万能钥匙'},
            {type: 11, value: '快手'},
            {type: 12, value: '魅族'},
            {type: 13, value: '应用宝推广'},
            {type: 14, value: '券妈妈'},
            {type: 15, value: '小啄赚钱'},
        ],
    },
    mutations: {
        GET_LABORATORY (state, action) {     //   科室数据
            state.laboratory = action;
        },
        GET_YZLIST (state, action) {     //   医助数据
            state.yzList = action;
        },
        GET_DEPARTMENT (state, action) {     //   部门数据
            state.department = action;
        },
        GET_CATEGORY (state, action) {     //   文章分类
            state.category = action;
        },
    },
    actions: {
        async getLaboratory({ commit }){      //  科室数据
            let { data } = await office();
            commit('GET_LABORATORY', data);
        },
        async getYzList({ commit }){      //  医助数据
            let { data } = await yzList();
            commit('GET_YZLIST', data);
        },
        async getDepartment({ commit }){      //  部门数据
            let { data } = await department();
            commit('GET_DEPARTMENT', data);
        },
        async getCategory({ commit }, params){      //  文章分类
            let { data } = await category(params);
            commit('GET_CATEGORY', data);
        },
    }
}

export default states;