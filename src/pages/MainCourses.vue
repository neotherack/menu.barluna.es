<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Platos principales</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Main Courses</div>
    <Item
          v-for="element in list"
          :key="element.title"
          v-bind="element"
        />
  </q-page>
</template>

<script>
import Item from 'components/Item'

export default {
  name: 'MainCourses',
  components: { Item },

  data () {
    return {
      list: [
        {
          title: 'Costillas de cerdo al Pedro Ximenez con patatas fritas',
          caption: 'Grilled pork chops in Pedro Ximenez sauce with fries',
          image: 'no-image.png',
          cost: '10,00 €',
          alergen: {}
        },
        {
          title: 'Carrilleras en salsa con patatas fritas y ensalada',
          caption: 'Veal cheek stew with fries and salad',
          image: 'no-image.png',
          cost: '9,00 €',
          alergen: {}
        },
        {
          title: 'Chuletillas de lechazo con patatas fritas',
          caption: 'Grilled lamb chops with fries',
          image: 'no-image.png',
          cost: '12,00 €',
          alergen: {}
        },
        {
          title: 'Dos huevos fritos con lomo y patatas',
          caption: 'Two fried eggs, fries and pork loin',
          image: 'no-image.png',
          cost: '8,50 €',
          alergen: {}
        },
        {
          title: 'Morcilla de León',
          caption: 'Black pudding (cured pork blood and onion)',
          image: 'raciones_morcilla.PNG',
          cost: '6,00 €',
          alergen: {}
        },
        {
          title: 'Callos',
          caption: 'Veal tripe stew',
          image: 'principales_callos.PNG',
          cost: '9,80 €',
          alergen: {}
        },
        {
          title: 'Oreja',
          caption: 'Pork ear stew',
          image: 'raciones_oreja.PNG',
          cost: '9,80€',
          alergen: {}
        },
        {
          title: 'Picadillo',
          caption: 'Minced meat mixture',
          image: 'no-image.png',
          cost: '7,50€',
          alergen: {}
        },
        {
          title: 'Calamares',
          caption: 'Fried-battered squid',
          image: 'raciones_calamares.PNG',
          cost: '9,80€',
          alergen: {}
        },
        {
          title: 'Sepia rebozada',
          caption: 'Fried-battered cuttlefish',
          image: 'no-image.png',
          cost: '7,80€',
          alergen: {}
        },
        {
          title: 'Hamburguesa',
          caption: 'Hamburguer',
          image: 'principales_hamburguesa.PNG',
          cost: '6,50€',
          alergen: {}
        }
      ]
    }
  }
}
</script>
