<template>
  <q-card class="q-ma-sm" horizontal>
    <q-card-section horizontal>
      <q-img
        :src="imageurl"
        basic
        class="col6"
      />
      <q-separator/>
      <q-card-section vertical class="col6">
        <div class="text-h6 text-weight-bold text-blue text-left">{{ title }}</div>
        <q-space/>
        <div class="text-h6 text-weight-medium text-left">{{ caption }}</div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Allergen',
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
    }
  },
  computed: {
    imageurl: function () {
      return 'https://menu.barluna.es/allergens/' + this.image
    }
  }
}
</script>
