import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
import getters from './getters'
// import Axios from '../common/axios'

Vue.use(Vuex)

const state = {
	bookList: [],
	eventItem: {},
	isLoading: false
}
export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})