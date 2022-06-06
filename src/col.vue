<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
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
        gutter:0
      }
    },
    created () {
      console.log('col created')
    },
    mounted () {
      console.log('col mounted')
    },
  }
</script>

<style lang="scss">
@use "sass:math";
  .col {
    width: 50%;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: math.div($n, 24) * 100%;
      }
    }
  }
</style>
