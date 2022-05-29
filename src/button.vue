<template>
  <!-- 单文件组件 -->
  <button class="j-button" :class="{ [`icon-${iconPosition}`]: true }"
  @click="$emit('click')">
    <j-icon class="icon" v-if="icon && !loading" :name="icon"></j-icon>
    <j-icon class="loading icon" v-if="loading" name="loading"></j-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading:{
      type:Boolean,
      default:false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss">
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
.j-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; // 因为是inline-flex 引起的

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  >.content {
    order: 2;
  }

  >.icon {
    order: 1;
    margin-right: .1em;
  }

  &.icon-right {
    >.icon {
      order: 2;
    }

    >.content {
      order: 1;
      margin-left: .1em;
    }
  }
  .loading{
      animation: spin 2s infinite linear;
    }
}
</style>
