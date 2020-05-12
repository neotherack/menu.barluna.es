<template>
  <q-btn round @click="showing = true">
    <q-avatar size="42px">
      <img :src="imageurl">
      <q-tooltip v-model="showing">{{ caption }}</q-tooltip>
    </q-avatar>
  </q-btn>
</template>

<script>
export default {
  name: 'AllergenIcon',
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
      return 'https://menu.barluna.es/allergens/' + this.name + '.png'
    },
    caption: function () {
      if (this.name === 'gluten') return 'ESP: Contiene gluten, ENG: Contains gluten'
      if (this.name === 'cacahuetes') return 'ESP: Contiene cacahuetes&#xa;Contains peanuts'
      if (this.name === 'soja') return 'ESP: Contiene soja, ENG: Contains soy'
      if (this.name === 'altramuces') return 'ESP: Contiene altramuces, ENG: Contains lupin seeds'
      if (this.name === 'pescado') return 'ESP: Contiene pescado, ENG: Contains fish'
      if (this.name === 'crustaceos') return 'ESP: Contiene crustáceos, ENG: Contains crustacean'
      if (this.name === 'moluscos') return 'ESP: Contiene moluscos, ENG: Contains mollusks'
      if (this.name === 'mostaza') return 'ESP: Contiene mostaza, ENG: Contains mustard'
      if (this.name === 'sulfitos') return 'ESP: Contiene dióxido de azufre y sulfitos, ENG: Contains sulfur dioxide and sulphites'
      if (this.name === 'apio') return 'ESP: Contiene apio, ENG: Contains celery'
      if (this.name === 'sesamo') return 'ESP: Contiene granos de sésamo, ENG: Contains sesame seeds'
      if (this.name === 'frutoscascara') return 'ESP: Contiene frutos con cáscara, ENG: Contains nuts'
      if (this.name === 'lacteos') return 'ESP: Contiene lácteos, ENG: Contains dairy products'
      if (this.name === 'huevos') return 'ESP: Contiene huevos, ENG: Contains eggs'
      return ''
    }
  }
}
</script>
