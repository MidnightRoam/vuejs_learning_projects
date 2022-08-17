import { createStore, createLogger } from 'vuex'
import counterModule from "@/store/modules/counter";
import mutations from "@/store/modules/mutations";
import actions from "@/store/modules/actions";

export default createStore({
    plugins: [createLogger()],
    modules: {
        count: counterModule
    },
    state() {
        return {
            appTitle: 'Vuex counter'
        }
    },
    mutations: mutations,
    action: actions,
    getters: {
        uppercaseTitle(state) {
            return state.appTitle.toUpperCase()
        }
    }
})