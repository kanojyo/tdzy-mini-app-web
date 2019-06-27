

const states = {
    state:{
        login: JSON.parse(sessionStorage.getItem('login')) || '',     //   登录保存user所有信息
        token: sessionStorage.getItem('token') || 0,    //  token
        device: localStorage.getItem('device') || 0,    //  device
        random: '',  //  验证随机码
    },
    mutations: {
        GET_ADMIN (state, action) {     //   登录保存user所有信息
            state.login = action;
        },
        GET_TOKEN (state, action) {     //  token
            state.token = action
        },
        GET_DEVICE (state, action) {     //  device
            state.device = action
        },
        GET_RANDOM (state) {     //  验证随机码
            state.random = Math.random()
        },
    },
    actions: {
        getAdmin({ commit }, res){      //  登录保存user所有信息
            sessionStorage.setItem('login', JSON.stringify(res));
            commit('GET_ADMIN', res);
        },
        getToken({ commit }, res){      //  token
            sessionStorage.setItem('token', res)
            commit('GET_TOKEN', res)
        },
        getDevice({ commit }, res){      //  device
            localStorage.setItem('device', res)
            commit('GET_DEVICE', res)
        },
        getRandom({ commit }, res){      //  验证随机码
            commit('GET_RANDOM', res)
        },
    }
}

export default states;