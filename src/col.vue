<template>
<div class="col" :class="colClass">
 <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'iCol',
    props:{
      span:{
        type:[Number,String],
      },
      offset:{
        type:[Number,String]
      },
    },
    date(){
      return{
        gutter:0,
      }
    },
    computed:{
      colClass(){
        let {span,offset} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`
        ]
      }
    }
  }
</script>

<style lang="scss">
@use "sass:math";
  .col {
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: math.div($n, 24) * 100%;
      }
    }
  }
</style>
