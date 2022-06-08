<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
   export default {
    name: 'iRow',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    computed:{
      computed:{
        rowStyle(){
          let {gutter} = this
          return {maginLeft: -gutter/2+'px',marginRight:-gutter / 2 + 'px' }
        }
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }
   }
</script>
<style scoped lang="scss">
  .row{
    display: flex;
  }
</style> 
