<template lang="html">
	<div class="m_head">
		<!-- head content -->
		<x-header slot="header"
      :left-options="leftOptions" :right-options="{showMore: true}" 
      :title="title" @on-click-more="onClickMore"></x-header>
		<div v-transfer-dom>
	      <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="changeLocale"></actionsheet>
	    </div>
	</div>
</template>
<script>
import {XHeader,TransferDom,Actionsheet} from 'vux'
import {setStore} from '../common/util'
	export default{
		data(){
			return {
				showMenus: false,
				routePath:'',
				menus: {
			        'zh': this.$t('中文'),
			        'en': this.$t('English')
			    }
			}
		},
		directives:{
			TransferDom
		},
		components:{
			XHeader,Actionsheet
		},
		methods:{
			 onClickMore () {
		      this.showMenus = true
		    },
			changeLocale (locale) {
				this.$i18n.locale=locale;
				setStore('lang',locale)
		    }
		},
		mounted(){
			this.routePath = this.$route.path;
			// console.log(param);	
		},
		computed:{
			leftOptions () {
		      return {
		        showBack: this.routePath !== '/'
		      }
		    },
		    title(){
		    	if(this.routePath==="/") return this.$t('home')
		    	if(this.routePath){
		    		const parts = this.routePath.split('/')
		    		return parts[1];
		    	} 
		    }
		}
	}
</script>
<style lang='less' scoped>
	.m_head{
		/* background-color: #eee;
		text-align: center; */
		width:100%;position:fixed;
		left:0;top:0;z-index:100;
	}
</style>