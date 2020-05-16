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
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Carrilleras en salsa con patatas fritas y ensalada',
          caption: 'Veal cheek stew with fries and salad',
          image: 'no-image.png',
          cost: '9,00 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Chuletillas de lechazo con patatas fritas',
          caption: 'Grilled lamb chops with fries',
          image: 'no-image.png',
          cost: '12,00 €',
          allergens: []
        },
        {
          title: 'Dos huevos fritos con lomo y patatas',
          caption: 'Two fried eggs, fries and pork loin',
          image: 'no-image.png',
          cost: '8,50 €',
          allergens: [{ name: 'huevos' }]
        },
        {
          title: 'Morcilla de León',
          caption: 'Black pudding (cured pork blood and onion)',
          image: 'raciones_morcilla.png',
          cost: '6,00 €',
          allergens: [],
          flags: [{ name: 'leon' }]
        },
        {
          title: 'Callos',
          caption: 'Veal tripe stew',
          image: 'principales_callos.png',
          cost: '9,80 €',
          allergens: [{ name: 'gluten' }]
        },
        {
          title: 'Oreja',
          caption: 'Pork ear stew',
          image: 'raciones_oreja.png',
          cost: '9,80€',
          allergens: [{ name: 'gluten' }]
        },
        {
          title: 'Picadillo',
          caption: 'Minced meat mixture',
          image: 'no-image.png',
          cost: '7,50€',
          allergens: [{ name: 'soja' }]
        },
        {
          title: 'Calamares',
          caption: 'Fried-battered squid',
          image: 'raciones_calamares.png',
          cost: '9,80€',
          allergens: [{ name: 'gluten' }, { name: 'moluscos' }, { name: 'soja' }]
        },
        {
          title: 'Sepia rebozada',
          caption: 'Fried-battered cuttlefish',
          image: 'no-image.png',
          cost: '7,80€',
          allergens: [{ name: 'crustaceos' }, { name: 'moluscos' }, { name: 'soja' }, { name: 'gluten' }, { name: 'lacteos' }, { name: 'pescado' }, { name: 'huevos' }, { name: 'apio' }, { name: 'sulfitos' }, { name: 'mostaza' }]
        },
        {
          title: 'Hamburguesa',
          caption: 'Hamburguer',
          image: 'principales_hamburguesa.png',
          cost: '6,50€',
          allergens: [{ name: 'gluten' }, { name: 'soja' }, { name: 'lacteos' }]
        }
      ]
    }
  }
}
</script>
