<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Alérgenos</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Alergens</div>
    <Alergen
          v-for="element in list"
          :key="element.title"
          v-bind="element"
        />
  </q-page>
</template>

<script>
import Alergen from 'components/Alergen'

export default {
  name: 'Alergens',
  components: { Alergen },

  data () {
    return {
      list: [
        {
          title: 'Altramuces',
          caption: 'Lupin seeds',
          image: 'altramuces.png'
        },
        {
          title: 'Apio',
          caption: 'Celery',
          image: 'apio.png'
        },
        {
          title: 'Cacahuete',
          caption: 'Peanuts',
          image: 'cacahuete.png'
        },
        {
          title: 'Mostaza',
          caption: 'Mustard',
          image: 'mostaza.png'
        },
        {
          title: 'Dióxido de azufre y sulfitos',
          caption: 'Sulfur dioxide and sulphites',
          image: 'sulfitos.png'
        },
        {
          title: 'Moluscos',
          caption: 'Mullusks',
          image: 'moluscos.png'
        },
        {
          title: 'Granos de sésamo',
          caption: 'Sesame seeds',
          image: 'sesamo.png'
        },
        {
          title: 'Crustáceo',
          caption: 'Crustacean',
          image: 'crustaceo.png'
        },
        {
          title: 'Frutos con cáscara',
          caption: 'Nuts',
          image: 'frutoscascara.png'
        },
        {
          title: 'Soja',
          caption: 'Soy',
          image: 'soja.png'
        },
        {
          title: 'Lácteos',
          caption: 'Dairy products',
          image: 'lacteos.png'
        },
        {
          title: 'Pescado',
          caption: 'Fish',
          image: 'pescado.png'
        },
        {
          title: 'Huevo',
          caption: 'Egg',
          image: 'huevo.png'
        },
        {
          title: 'Gluten',
          caption: 'Gluten',
          image: 'gluten.png'
        }
      ]
    }
  }
}
</script>
