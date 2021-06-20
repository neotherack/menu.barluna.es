<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Postres</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Desserts</div>
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
  name: 'Desserts',
  components: { Item },

  data () {
    return {
      list: [
        {
          title: 'Crema de limón (casera)',
          caption: 'Lemon cream (home-made)',
          image: 'postres_crema_limon.png',
          cost: '3,50 €',
          allergens: [{ name: 'lacteos' }]
        },
        {
          title: 'Tarta de la abuela (casera)',
          caption: 'Grandma’s cake (home-made)',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }, { name: 'soja' }, { name: 'frutoscascara' }, { name: 'sulfitos' }, { name: 'sesamo' }]
        },
        {
          title: 'Tarta comtessa',
          caption: 'Ice cream cake',
          image: 'postres_tarta_comtessa.png',
          cost: '3,50 €',
          allergens: [{ name: 'soja' }, { name: 'lacteos' }]
        },
        {
          title: 'Queso de Burgos con membrillo',
          caption: 'Fresh cheese with quince',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'lacteos' }]
        },
        {
          title: 'Queso de cabra con nueces y miel',
          caption: 'Goat cured cheese with walnuts and honey',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'lacteos' }, { name: 'frutoscascara' }]
        },
        {
          title: 'Flan',
          caption: 'Flan',
          image: 'postres_flan.png',
          cost: '3,50 €',
          allergens: [{ name: 'lacteos' }, { name: 'huevos' }]
        },
        {
          title: 'Bizcocho de manzana (casero)',
          caption: 'Apple sponge cake (home-made)',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'soja' }, { name: 'gluten' }, { name: 'lacteos' }, { name: 'huevos' }]
        },
        {
          title: 'Tarta de manzana (casero)',
          caption: 'Apple cake (home-made)',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'soja' }, { name: 'gluten' }, { name: 'lacteos' }, { name: 'huevos' }]
        },
        {
          title: 'Tarta de queso con arándanos (casera)',
          caption: 'Blueberry cheesecake (home-made)',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'soja' }, { name: 'gluten' }, { name: 'lacteos' }]
        },
        {
          title: 'Copa helada de café',
          caption: 'Coffee ice cream',
          image: 'no-image.png',
          cost: '2,00 €',
          allergens: [{ name: 'lacteos' }]
        },
        {
          title: 'Fruta del tiempo',
          caption: 'Fruit (seasonal)',
          image: 'postres_fruta.png',
          cost: '2,50 €',
          allergens: []
        }
      ]
    }
  }
}
</script>
