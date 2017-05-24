import axios from 'axios'
axios.defaults.timeout = 5000
	// code状态码200判断
axios.interceptors.response.use((res) => {
	if (res.status === 654) { // 百度云请求超时检测
		window.alert('请求超时！')
	}
	if (res.status !== 200) {
		window.alert('数据返回有误')
		return Promise.reject(res)
	}
	return res.data
}, (error) => {
	console.log('promise error:' + error)
	return Promise.reject(error)
})
export default axios