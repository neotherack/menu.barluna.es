<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Entrantes</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Starters</div>
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
  name: 'Starters',
  components: { Item },

  data () {
    return {
      list: [
        {
          title: 'Patatas bravas [grande]',
          caption: 'Fried potatoes [large] (mayo and tomato sauce)',
          image: 'raciones_bravas.png',
          cost: '5,00 €',
          allergens: [{ name: 'huevos' }]
        },
        {
          title: 'Patatas bravas [mediana]',
          caption: 'Fried potatoes [medium size](mayo and tomato sauce)',
          image: 'raciones_bravas.png',
          cost: '3,00 €',
          allergens: [{ name: 'huevos' }]
        },
        {
          title: 'Puntillitas',
          caption: 'Tiny fried-battered squid',
          image: 'raciones_chipirones.png',
          cost: '8,50 €',
          allergens: [{ name: 'huevos' }, { name: 'soja' }, { name: 'lacteos' }, { name: 'gluten' }, { name: 'pescado' }, { name: 'apio' }, { name: 'sulfitos' }, { name: 'mostaza' }]
        },
        {
          title: 'Gambones',
          caption: 'Large grilled shrimps',
          image: 'no-image.png',
          cost: '12,80 €',
          allergens: [{ name: 'crustaceos' }, { name: 'sulfitos' }]
        },
        {
          title: 'Boquerones en vinagre',
          caption: 'Vinegar marinated anchovies',
          image: 'raciones_boquerones.png',
          cost: '8,00 €',
          allergens: [{ name: 'pescado' }, { name: 'sulfitos' }]
        },
        {
          title: 'Croquetas de cecina',
          caption: 'Jerky croquettes',
          image: 'no-image.png',
          cost: '7,50 €',
          allergens: [{ name: 'crustaceos' }, { name: 'moluscos' }, { name: 'soja' }, { name: 'lacteos' }, { name: 'gluten' }, { name: 'pescado' }]
        },
        {
          title: 'Croquetas de boletus con trufa',
          caption: 'Boletus and truffle croquettes',
          image: 'no-image.png',
          cost: '7,50 €',
          allergens: [{ name: 'lacteos' }, { name: 'gluten' }, { name: 'pescado' }]
        },
        {
          title: 'Champiñones',
          caption: 'Mushrooms',
          image: 'no-image.png',
          cost: '7,80 €',
          allergens: [{ name: 'soja' }, { name: 'gluten' }]
        },
        {
          title: 'Torreznos de soria (2 unidades)',
          caption: 'Thick bacon rashers (2 units)',
          image: 'no-image.png',
          cost: '6,00 €',
          allergens: []
        },
        {
          title: 'Chorizo a la sidra',
          caption: 'Cider boiled red saussage',
          image: 'raciones_chorizosidra.png',
          cost: '3,50 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Pastel de cabracho',
          caption: 'Red scorpionfish pie',
          image: 'no-image.png',
          cost: '9,00€',
          allergens: [{ name: 'lacteos' }, { name: 'huevos' }, { name: 'pescado' }]
        },
        {
          title: 'Ración de cecina de león',
          caption: 'Jerky (cured cow meat)',
          image: 'raciones_cecina.png',
          cost: '10,00€',
          allergens: []
        },
        {
          title: 'Chosco',
          caption: 'Cured pork meat',
          image: 'no-image.png',
          cost: '10,00€',
          allergens: []
        },
        {
          title: 'Ración de jamón serrano',
          caption: 'Cured pork ham',
          image: 'raciones_jamon.png',
          cost: '9,00€',
          allergens: []
        },
        {
          title: 'Ración de queso',
          caption: 'Cured cheese',
          image: 'raciones_queso.png',
          cost: '9,00€',
          allergens: [{ name: 'lacteos' }]
        }
      ]
    }
  }
}
</script>
