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
          image: 'desayunos_zumo.png',
          cost: '2,50 €',
          allergens: []
        },
        {
          title: 'Café con leche y tostada de mantequilla y mermelada',
          caption: 'Large caffe latte and butter/jam toast',
          image: 'desayunos_cafe_tostada_mantequilla.png',
          cost: '2,90 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        },
        {
          title: 'Café con leche grande y dos magdalenas',
          caption: 'Large caffe latte and two muffins',
          image: 'desayunos_cafedosmagdalenas.png',
          cost: '2,90 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }, { name: 'soja' }, { name: 'frutoscascara' }]
        },
        {
          title: 'Café con leche grande con tostada de aceite de oliva',
          caption: 'Large caffe latte and olive oil toast',
          image: 'desayunos_cafe_tostada_aceite.png',
          cost: '2,90 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        },
        {
          title: 'Café con leche grande y tostada con tomate y aceite de oliva',
          caption: 'Large caffe latte with tomato and olive oil toast',
          image: 'desayunos_cafe_tostada_aceite_tomate.png',
          cost: '3,20 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        },
        {
          title: 'Café con leche grande y napolitana o croissant',
          caption: 'Large caffe late with “pain au chocolat” or croissant',
          image: 'desayunos_cafe_bolleria.png',
          cost: '3,20 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }, { name: 'soja' }, { name: 'frutoscascara' }]
        },
        {
          title: 'Café con leche grande y tostada con jamón serrano, aceite de oliva y tomate',
          caption: 'Large caffe latte with tomato, serrano ham and olive oil toast',
          image: 'desayunos_cafe_tostada_aceite_tomate_jamon.png',
          cost: '4,00 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        }
      ]
    }
  }
}
</script>
