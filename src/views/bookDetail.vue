<template lang="html">
	<div class="detail">
		<!-- home content -->
		<view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
			<head-top></head-top>
			<div class="m_content">
				<p class="site-title">{{listArr.title}}</p>
				<img :src="listArr.image_hlarge">
				<p class="site-cont" v-if="listArr.content" v-html="content"></p>
			</div>
			<foot-bottom></foot-bottom>
		</view-box>
	</div>
</template>
<script>
import headTop from '../components/header'
import footBottom from '../components/footer'
import {ViewBox} from 'vux'
import {bookDetail} from '../service/getData'
	export default{
		name:'detail',
		data(){
			return{
				listArr:[]
			}
		},
		components:{
			headTop,footBottom,ViewBox
		},
		created() {
		    const id = this.$route.params.id;
		    // console.log(id) 
		    bookDetail(id).then(res=>{
		    	this.listArr=res;
		    })
		},
		computed:{
			content: function () {
		      // Careful XSS
		      // Remove copyright imgs
		      return this.listArr.content.replace(/<img.+?>/ig, '')
		    }
		}
	}
</script>
<style lang='less' scoped>
  .detail {
    font-size: 12px;
    .m_content{
    	/* height: 100vh;
    	overflow: scroll; */
    	padding: 0.25rem;
    }
    img{
    	display: block;
	    width: 60%;
	    margin:  0 auto 0.5rem;
    }
    p {
	    font-size: .9rem;
	    line-height: 1.5rem;
	    text-align: center;
	    padding-bottom: 0.5rem;
	    &.site-title {
		    color: #ff8000;
		  }
		&.site-cont {
		    color: #666;
		    font-size: 0.6rem;
		    text-align: left;
		    margin-bottom: 1.8rem;
		  }	
	  }
  }	
</style>