<template>
  <q-btn flat @click="showing = true">
    <img :src="imageurl" width="50px">
    <q-tooltip v-model="showing">{{ caption }}</q-tooltip>
  </q-btn>
</template>

<script>
export default {
  name: 'Flag',
  props: {
    name: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {
      showing: false
    }
  },
  computed: {
    imageurl: function () {
      return 'https://menu.barluna.es/flags/' + this.name + '.png'
    },
    caption: function () {
      if (this.name === 'leon') return 'ESP: Típico de León, ENG: Traditional product of León'
      if (this.name === 'asturias') return 'ESP: Típico de Asturias, ENG: Traditional product of Asturias'
      return ''
    }
  }
}
</script>
