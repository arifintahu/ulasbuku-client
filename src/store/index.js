import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	user : ''
};

const getters = {
	user: state => state.user
};

const actions = {
	setUser({commit}, data) {
		return new Promise((resolve) => {
			commit('setUser', data);
			resolve();
		})
	}
};

const mutations = {
	setUser(state, data) {
		state.user = data;
	}
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
