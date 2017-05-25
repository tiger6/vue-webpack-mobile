/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式 默认hash、history为h5模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */
let baseUrl;
let routerMode;
const imgBaseUrl = 'https://qnmob2.doubanio.com';

if (process.env.NODE_ENV == 'development') {
	baseUrl = '';
	routerMode = 'history'
} else {
	baseUrl = 'https://api.douban.com';
	routerMode = 'hash'
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl
}