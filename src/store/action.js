import {
	bookList
} from '../service/getData'

import {
	BOOK_LIST
} from './mutation-types.js'

export default {
	async getBookList({
		commit,
		state
	}) {
		let res = await bookList();
		commit(BOOK_LIST, res)
	}
}