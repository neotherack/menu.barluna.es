<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Alérgenos</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Allergens</div>
    <Allergen
          v-for="element in list"
          :key="element.title"
          v-bind="element"
          class="col-11 col-md-5"
        />
  </q-page>
</template>

<script>
import Allergen from 'components/Allergen'

export default {
  name: 'Allergens',
  components: { Allergen },

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
          title: 'Cacahuetes',
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
          title: 'Crustáceos',
          caption: 'Crustacean',
          image: 'crustaceos.png'
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
          title: 'Huevos',
          caption: 'Egg',
          image: 'huevos.png'
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
