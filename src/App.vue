<template>
  <div id="app">
  	<div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {Loading, TransferDom} from 'vux'
export default {
  name: 'app',
  directives:{
    TransferDom
  },
  components:{
  	Loading
  },
  computed:{
    isLoading(){
      return this.$store.getters.getLoading
    }
  }
}
</script>

<style lang="less">
@import './assets/less/base.less';

.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>
