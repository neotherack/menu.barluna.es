<template>
  <q-item
    clickable
    tag="a"
    class="q-my-sm"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon v-if="title=='Alérgenos'" class="text-red" :name="icon" />
      <q-icon v-else class="text-blue" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-weight-medium">{{ title }}</q-item-label>
      <q-item-label class="text-weight-medium text-italic">{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
