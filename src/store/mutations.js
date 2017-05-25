import {
	BOOK_LIST,
	BOOK_DETAIL,
	UPDATE_LOADING
} from './mutation-types'

export default {
	[BOOK_LIST](state, payload) {
		var srcObj = {},
			eventList = payload.events,
			bList = [];
		eventList.forEach((key) => {
			srcObj = {};
			srcObj['desc'] = key.content;
			srcObj['src'] = key.image_hlarge;
			srcObj['title'] = key.title;
			srcObj['url'] = '/Detail/' + key.id;
			bList.push(srcObj);
		})
		state.bookList = bList;
	},

	[BOOK_DETAIL](state, payload) {
		state.eventItem = payload.res;
	},

	UPDATE_LOADING(state, payload) {
		state.isLoading = payload.isLoading
	}
}