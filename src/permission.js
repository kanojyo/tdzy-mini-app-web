import store from './store'
import router from './router'

const whiteList = ['/'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    if (store.state.login.token == 0) {
        if (to.path !== '/') {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) === -1) {
            next()
        } else {
            next('/')
        }
    }
})
