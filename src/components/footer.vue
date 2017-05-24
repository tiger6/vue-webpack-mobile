<template lang="html">
	<div class="m_foot">
		<!-- foot content -->
		<tabbar>
	      <tabbar-item>
	        <span slot="label">{{$t("Wechat")}}</span>
	      </tabbar-item>
	      <tabbar-item show-dot>
	        <span slot="label">{{$t("Message")}}</span>
	      </tabbar-item>
	      <tabbar-item selected link="/component/demo">
	        <span slot="label">{{$t("Explore")}}</span>
	      </tabbar-item>
	      <tabbar-item badge="2">
	        <span slot="label">{{$t("News")}}</span>
	      </tabbar-item>
	    </tabbar>
	</div>
</template>
<script>
import {Tabbar, TabbarItem} from 'vux'
	export default{
		data(){
			return{

			}
		},
		components:{
			Tabbar, 
			TabbarItem
		}
	}
</script>
<style lang='less' scoped>
	.m_foot{
		background-color: #eee;
		text-align: center;
	    position: fixed;
	    z-index: 500;
	    bottom: 0;
	    width: 100%;
	}
</style>