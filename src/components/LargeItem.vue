<template>
  <q-card class="col-11 col-md-5 q-ma-sm" vertical>
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
  name: 'LargeItem',
  props: {
    text: {
      type: Object
    },
    cost: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    imageurl: function () {
      return 'https://menu.barluna.es/images/' + this.image
    }
  }
}
</script>
