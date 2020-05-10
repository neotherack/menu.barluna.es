<template>
  <q-card class="col-11 col-md-5 q-ma-sm" vertical>
    <q-card-section horizontal class="col">
      <q-img
        class="col-3 offset-5"
        :src="imageurl"
        basic
      />
    </q-card-section>
    <q-separator />
    <q-card-section vertical>
      <div class="text-h6 text-weight-bold text-blue text-left">{{ title }}</div>
      <q-separator class="q-my-sm"/>
      <div class="text-h6 text-weight-medium text-left">{{ caption }}</div>
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
      return 'https://menu.barluna.es/alergens/' + this.image
    }
  }
}
</script>
