<template>
  <component :is="component"></component>
</template>

<script>
export default {
  computed: {
    component() {
      return this.$route.meta.component || null;
    }
  }
}
</script>