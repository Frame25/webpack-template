<template lang="pug">
  .component
    p {{text}}
    .other-text other text
</template>

<script>
export default {
  data: () => {
    return {
      text: 'this is component'
    }
  }
}
</script>

<style lang="sass">
.component
  color: green
  text-align: center
</style>
