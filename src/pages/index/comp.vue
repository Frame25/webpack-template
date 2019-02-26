<template lang="pug">
  .huy {{innerText}}
</template>
<script>
export default {
  name: "Huy",
  props: ['text'],
  computed: {
    innerText () {
      return this.text || 'default text'
    }
  }
}
</script>
<style lang="sass">
  .huy
    color: red
</style>

