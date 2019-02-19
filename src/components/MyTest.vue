<template>
  <p>{{title}}
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>