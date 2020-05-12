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
          title: 'Crema de limón',
          caption: 'Lemon cream',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'lacteos' }]
        },
        {
          title: 'Tarta de la abuela',
          caption: 'Grandma’s cake',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }, { name: 'soja' }, { name: 'frutoscascara' }, { name: 'sulfitos' }, { name: 'sesamo' }]
        },
        {
          title: 'Brazo de gitano',
          caption: 'Swiss roll',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'gluten' }, { name: 'huevos' }, { name: 'frutoscascara' }, { name: 'lacteos' }]
        },
        {
          title: 'Tarta comtessa',
          caption: 'Ice cream cake',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'soja' }, { name: 'lacteos' }]
        },
        {
          title: 'Fruta del tiempo',
          caption: 'Fruit (seasonal)',
          image: 'no-image.png',
          cost: '2,50 €',
          allergens: []
        }
      ]
    }
  }
}
</script>
