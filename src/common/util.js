// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
window.Date.prototype.Format = function(fmt) {
	var o = {
		'M+': this.getMonth() + 1,
		'd+': this.getDate(),
		'h+': this.getHours(),
		'm+': this.getMinutes(),
		's+': this.getSeconds(),
		'q+': Math.floor((this.getMonth() + 3) / 3),
		'S': this.getMilliseconds()
	}
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
		}
	}
	return fmt
}

/**
 * 字符串扩展
 * @param  {[type]} typeof String.prototype.startsWith ! [description]
 * @return {[type]}        [description]
 */
if (typeof String.prototype.startsWith !== 'function') {
	Window.String.prototype.startsWith = function(prefix) {
		return this.slice(0, prefix.length) === prefix
	}
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}

/**
 * 快速生成国际化翻译对象
 * @param  {[type]} zhStr [description]
 * @param  {[type]} enStr [description]
 * @return {[type]}       [description]
 */
export const titleLang = (zhStr, enStr) => {
	return {
		zh: zhStr,
		en: enStr
	}
}

/**
 * Url扩展
 * @param  {[type]} search [description]
 * @return {[type]}        [description]
 */
export const query = (search) => {
	let str = search || window.location.search
	let objURL = {}

	str.replace(
		new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
		($0, $1, $2, $3) => {
			objURL[$1] = $3
		}
	)
	return objURL
}

/**
 * URL拼接
 * @param  {[type]} url   [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export const queryString = (url, query) => {
	let str = []
	for (let key in query) {
		str.push(key + '=' + query[key])
	}
	return url + '?' + str.join('&')
}

/**
 * 校验是否为合法URL
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */
export const isLegalUrl = (str) => {
	if (str.length < 4 || str.startsWith('http')) {
		return str.length >= 6
	}

	let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
	return pattern.test(str)
}