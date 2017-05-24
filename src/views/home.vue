<template lang="html">
	<div class="m_home" style="height:100%">
		<!-- home content -->
		<view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
			<head-top></head-top>
			<div class="m_content">
				<!-- <p>内容info</p> -->
				 <panel :header="$t('msgList')" :footer="footer" :list="bookList" :type="type"></panel>
			</div>
			<foot-bottom></foot-bottom>
		</view-box>
	</div>
</template>
<script>
import headTop from '../components/header'
import footBottom from '../components/footer'
import {Panel,ViewBox} from 'vux'
import {mapState, mapActions} from 'vuex'
	export default{
		name:'home',
		data(){
			return{
				type: '1',
		      	footer: {
		        	title: this.$t('infoMore'),
		        	url: 'http://www.douban.com'
		      	}
			}
		},
		components:{
			headTop,footBottom,
			Panel,ViewBox
		},
		methods:{
			...mapActions(['getBookList']),
		},
		mounted(){
            //获取用户信息
            this.getBookList();
        },
		computed:{
			bookList(){
				return this.$store.getters.getBookList;
			}
		}
	}
</script>
<style lang='less' scoped>
 @import '../assets/less/mixin.less';
	.m_content{
		.mixin_wh(100%,auto);
	}
</style>