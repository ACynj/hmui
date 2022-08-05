<template>
<div class="row">
  <hm-button type="primary">登录</hm-button>
  <hm-button type="info">登录</hm-button>
  <hm-button type="success">登录</hm-button>
  <hm-button type="warning">登录</hm-button>
  <hm-button type="danger">登录</hm-button>
</div>
<div class="row">
  <hm-button plain type="primary">登录</hm-button>
  <hm-button plain type="info">登录</hm-button>
  <hm-button plain type="success">登录</hm-button>
  <hm-button plain type="warning">登录</hm-button>
  <hm-button plain type="danger">登录</hm-button>
</div>
<div class="row">
  <hm-button round type="primary">登录</hm-button>
  <hm-button round type="info">登录</hm-button>
  <hm-button round type="success">登录</hm-button>
  <hm-button round type="warning">登录</hm-button>
  <hm-button round type="danger">登录</hm-button>
</div>
<div class="row">
  <hm-button icon="icon-yuanxinxi" circle type="primary">登录</hm-button>
  <hm-button circle type="info">登录</hm-button>
  <hm-button circle type="success">登录</hm-button>
  <hm-button circle type="warning">登录</hm-button>
  <hm-button circle type="danger">登录</hm-button>
</div>
<div class="row">
  <hm-button icon="icon-yuanxinxi" circle type="primary"></hm-button>
  <hm-button icon="icon-quxiao" circle type="info"></hm-button>
  <hm-button icon="icon-user" circle type="success"></hm-button>
  <hm-button icon="icon-safety" circle type="warning"></hm-button>
  <hm-button @click="handleClick" icon="icon-edit" circle type="danger"></hm-button>
</div>
<div class="row">
  <hm-button disabled icon="icon-yuanxinxi">登录</hm-button>
  <hm-button disabled icon="icon-yuanxinxi"  type="primary">登录</hm-button>
  <hm-button disabled icon="icon-quxiao"  type="info">登录</hm-button>
  <hm-button disabled icon="icon-user"  type="success">登录</hm-button>
  <hm-button disabled icon="icon-safety"  type="warning">登录</hm-button>
  <hm-button disabled @click="handleClick" icon="icon-edit"  type="danger">登录</hm-button>
</div>
<div class="row">
  <hm-button disabled plain >登录</hm-button>
  <hm-button disabled plain type="primary">登录</hm-button>
  <hm-button disabled plain type="info">登录</hm-button>
  <hm-button disabled plain type="success">登录</hm-button>
  <hm-button disabled plain type="warning">登录</hm-button>
  <hm-button disabled plain type="danger">登录</hm-button>
</div>
<div class="row">
  <hm-button type="primary" @click="visible = true">点击打开dialog</hm-button>
</div>
<!-- <hm-dialog title="自定义标题"></hm-dialog> -->
<hm-dialog width="20%" top="0" v-model:visible="visible">
  <template #title>
    <span class="hm-dialog_title">自定义插槽标题</span>
  </template>
  <template #footer>
    <hm-button type="primary">确定</hm-button>
    <hm-button @click="visible=false" type="info" style="marginLeft:20px;">取消</hm-button>
  </template>
</hm-dialog>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup() {
    const handleClick = () => {
      alert('hello')
    }
    let visible = ref(false)
    const handleClose = () => {
      visible.value = false
    }
    return {
      visible,
      handleClick,
      handleClose
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  .row{
    margin-top: 10px;
    .hm-button{
      margin: 0 10px;
    }
  }
  
}
</style>
