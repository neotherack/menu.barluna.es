<template>
  <q-page class="flex flex-center">
    <div>{{ title }}</div>
  </q-page>
</template>

<script>
export default {
  name: 'Test',
  props: {
    title: {
      type: String,
      required: true,
      default: 'test'
    }
  }
}
</script>
