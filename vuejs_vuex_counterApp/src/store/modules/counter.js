export default {
    namespaced: true,
    state() {
        return {
            counter: 1
        }
    },
    mutations: {
        counterIncrement(state) {
            state.counter++
        },
        counterDecrement(state) {
            state.counter--
        },
        add(state, value) {
            state.counter += value
        },
        counterNull(state) {
            state.counter = 0
        }
    },
    actions: {
        counterPlusAsync({ commit }, payload) {
            setTimeout(() => {
                commit('add', payload.value)
            }, payload.delay)
        }
    },
    getters: {
        counter(state) {
            if (state.counter > 499) {
                return state.counter = 0
            }
            return state.counter
        },
        doubleCounter(state, getters, rootState, rootGetters) {
            // console.log('state', state)
            // console.log('getters', getters)
            // console.log('rootState', rootState)
            // console.log('rootGetters', rootGetters)
            return getters.counter * 2
        }
    }
}