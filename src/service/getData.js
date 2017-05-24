import Axios from '../common/axios'
import * as books from './tempdata/books'
import * as bookDec from './tempdata/bookDetail'

/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

//开发环境使用模拟数据
if (process.env.NODE_ENV == 'development') {
	var bookList = () => setpromise(books.bookList);
	var bookDetail = (bId) => setpromise(bookDec.bookDetail);
} else {
	/**
	 * 获取图书列表
	 */
	var bookList = () => Axios.get('/v2/event/list', {
		params: {
			loc: '108288',
			count: '6'
		}
	});
	/**
	 * 获取图书详情
	 */
	var bookDetail = (bId) => Axios.get('/v2/event/' + bId);
}
export {
	bookList,
	bookDetail
}