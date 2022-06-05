<template>
   <svg  class="j-icon">
        <use :xlink:href="`#i-${name}`" />
    </svg>
</template>

<script>
import './svg'
  export default {
    props:['name']
  }
</script>

<style lang="scss">
.j-icon{
  width: 1em;
  height: 1em;
}
</style>

