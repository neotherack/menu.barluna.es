<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Desayunos</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Breakfast</div>
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
  name: 'Breakfast',
  components: { Item },

  data () {
    return {
      list: [
        {
          title: 'Zumo de naranja natural',
          caption: 'Fresh orange juice',
          image: 'no-image.png',
          cost: '2,00 €',
          allergens: []
        },
        {
          title: 'Café con leche y tostada de mantequilla y mermelada',
          caption: 'Large caffe latte and butter/jam toast',
          image: 'no-image.png',
          cost: '2,40 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        },
        {
          title: 'Café con leche grande y dos magdalenas',
          caption: 'Large caffe latte and two muffins',
          image: 'no-image.png',
          cost: '2,40 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }, { name: 'soja' }, { name: 'frutoscascara' }]
        },
        {
          title: 'Café con leche grande con tostada de aceite de oliva',
          caption: 'Large caffe latte and olive oil toast',
          image: 'no-image.png',
          cost: '2,40 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        },
        {
          title: 'Café con leche grande y tostada con tomate y aceite de oliva',
          caption: 'Large caffe latte with tomato and olive oil toast',
          image: 'no-image.png',
          cost: '2,40 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        },
        {
          title: 'Café con leche grande y napolitana o croissant',
          caption: 'Large caffe late with “pain au chocolat” or croissant',
          image: 'no-image.png',
          cost: '2,70 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }, { name: 'soja' }, { name: 'frutoscascara' }]
        },
        {
          title: 'Café con leche grande y tostada con jamón serrano, aceite de oliva y tomate',
          caption: 'Large caffe latte with tomato, serrano ham and olive oil toast',
          image: 'no-image.png',
          cost: '3,50 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        }
      ]
    }
  }
}
</script>
