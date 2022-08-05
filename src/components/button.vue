<template>
<button :disabled="disabled" @click="handleClick" class="hm-button" :class="[`hm-button--${type}`,{'isplain': plain,'is-round': round, 'is-circle': circle,'is-disabled': disabled}]">
  <i v-if="icon" :class="`iconfont ${icon}`"></i>
  <span v-if="$slots.default">
    <slot></slot>
  </span>
</button>
</template>
<script>
export default {
  name: 'HmButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click')
    }
    return {
      handleClick
    }
  }
}
</script>
<style scoped lang="scss">
.hm-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.hm-button--primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background-color: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.hm-button--success{
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background-color: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.hm-button--info{
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background-color: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.hm-button--warning{
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background-color: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.hm-button--danger{
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background-color: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
.hm-button.isplain {
  &:hover,
  &:focus{
    background-color: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.hm-button--primary.isplain{
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.hm-button--success.isplain{
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.hm-button--info.isplain{
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4f6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.hm-button--warning.isplain{
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.hm-button--danger.isplain{
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
.hm-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.hm-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.hm-button [class*=icon-]+span{
  margin-left: 5px;
}
.hm-button.is-disabled, .hm-button.is-disabled:hover, .hm-button.is-disabled:focus{
    color: #a8abb2;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #e4e7ed;
}
.hm-button--primary.is-disabled, .hm-button--primary.is-disabled:hover, .hm-button--primary.is-disabled:focus{
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.hm-button--success.is-disabled, .hm-button--success.is-disabled:hover, .hm-button--success.is-disabled:focus{
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.hm-button--info.is-disabled, .hm-button--info.is-disabled:hover, .hm-button--info.is-disabled:focus{
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.hm-button--warning.is-disabled, .hm-button--warning.is-disabled:hover, .hm-button--warning.is-disabled:focus{
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.hm-button--danger.is-disabled, .hm-button--danger.is-disabled:hover, .hm-button--danger.is-disabled:focus{
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}
.hm-button.isplain.is-disabled, .hm-button.isplain.is-disabled:hover, .hm-button.isplain.is-disabled:focus{
    color: #a8abb2;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #e4e7ed;
}
.hm-button--primary.isplain.is-disabled, .hm-button--primary.isplain.is-disabled:hover, .hm-button--primary.isplain.is-disabled:focus{
    color: #a0cfff;
    background-color: #ecf5ff;
    border-color: #d9ecff;
}
.hm-button--warning.isplain.is-disabled, .hm-button--warning.isplain.is-disabled:hover, .hm-button--warning.isplain.is-disabled:focus{
    color: #f3d19e;
    background-color: #fdf6ec;
    border-color: #faecd8;
}
.hm-button--info.isplain.is-disabled, .hm-button--info.isplain.is-disabled:hover, .hm-button--info.isplain.is-disabled:focus{
    color: #c8c9cc;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
}
.hm-button--danger.isplain.is-disabled, .hm-button--danger.isplain.is-disabled:hover, .hm-button--danger.isplain.is-disabled:focus{
    color: #fab6b6;
    background-color: #fef0f0;
    border-color: #fde2e2;
}
.hm-button--success.isplain.is-disabled, .hm-button--success.isplain.is-disabled:hover, .hm-button--success.isplain.is-disabled:focus{
    color: #b3e19d;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
}
</style>