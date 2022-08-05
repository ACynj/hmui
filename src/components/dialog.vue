<template>
<div class="hm-dialog__wrapper" @click.self="handleClose" v-show="visible">
  <div class="hm-dialog" :style="{width: width,marginTop: top}">
    <div class="hm-dialog__header">
      <slot name="title">
        <span class="hm-dialog_title">{{title}}</span>
      </slot>
      <button class="hm-dialog__headerbtn" @click="handleClose">
        <i class="iconfont icon-dacha"></i>
      </button>
    </div>
    <div class="hm-dialog__body">
      <slot></slot>
    </div>
    <div class="hm-dialog__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HmDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const handleClose = () => {
      emit('update:visible',false)
    }
    return {
      handleClose
    }
  }
}
</script>

<style lang="scss" scoped>
.hm-dialog__wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0,0,0,.5);
  margin: 0;
  z-index: 2001;
  .hm-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &__header{
      padding: 20px 20px 10px;
      .hm-dialog__title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hm-dialog__headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .icon-dacha{
          color: #909399;
        }
      }
    }
    &__body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
</style>