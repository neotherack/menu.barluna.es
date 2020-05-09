<template>
  <q-item class="col-12 col-md-6">
    <q-item-section
      v-if="image"
      avatar
    >
      <img
      alt="image"
      src="statics/icons/favicon.png"
    >
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label>{{ cost }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Item',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },

    caption: {
      type: String,
      default: '',
      required: false
    },

    image: {
      type: String,
      default: '',
      required: false
    },

    cost: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>
