<template>
  <q-page class="flex flex-center row">
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
          image: 'ninguna',
          cost: '2,00 €',
          alergen: {}
        },
        {
          title: 'Café con leche y tostada de mantequilla y mermelada',
          caption: 'Large caffe latte and butter/jam toast',
          image: 'ninguna',
          cost: '2,40 €',
          alergen: {}
        },
        {
          title: 'Café con leche grande con tostada de aceite de oliva',
          caption: 'Large caffe latte and two muffins',
          image: '',
          cost: '',
          alergen: {}
        },
        {
          title: 'Café con leche grande y tostada con tomate y aceite de oliva',
          caption: 'Large caffe latte and olive oil toast',
          image: '',
          cost: '',
          alergen: {}
        },
        {
          title: 'Café con leche grande y napolitana o croissant',
          caption: 'Large caffe latte with tomato and olive oil toast',
          image: '',
          cost: '',
          alergen: {}
        },
        {
          title: 'Café con leche grande y tostada con jamón serrano, aceite de oliva y tomate',
          caption: 'Large caffe late with “pain au chocolat” or croissant',
          image: '',
          cost: '',
          alergen: {}
        },
        {
          title: '',
          caption: 'Large caffe latte with tomato, serrano ham and olive oil toast',
          image: '',
          cost: '',
          alergen: {}
        }
      ]
    }
  }
}
</script>
