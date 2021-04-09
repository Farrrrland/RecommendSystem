import Vue from 'vue'
import Vuex from 'vuex'

import logIn from '.modules/logIn'

Vue.ues(Vuex);

const state = {}
const actions = {}
const mutations = {}
const store = new Vuex.Store({
    modules: {
        logIn
    },
    actions,
    state,
    mutations
})
export default store;

// init
const state = {
    session_id: "",
    user: "",
    userImage: ""
}

const getters = {}

const actions = {}

const mutations = {
    getSession_id(state, value) {
        state.session_id = value
    },
    getUser(state, value) {
        state.useermobile = value
    },
    getUserImage(state, value) {
        state.userImage = value
    }
}