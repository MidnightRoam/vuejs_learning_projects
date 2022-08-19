const TOKEN_KEY = 'jwt-token'

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    },
    actions: {
        async login({ commit }) {
            commit('setToken', 'TEST TOKEN')
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token // двойное отрицание. Если state - null, то сначала он превращается в true, а затем в false
        }
    }
}