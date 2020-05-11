<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Bocadillos</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Sandwiches</div>
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
  name: 'Sandwiches',
  components: { Item },

  data () {
    return {
      list: [
        {
          title: 'Calamares',
          caption: 'Squid',
          image: 'no-image.png',
          cost: '4,00 €',
          alergen: {}
        },
        {
          title: 'Jamón serrano',
          caption: 'Serrano ham',
          image: 'no-image.png',
          cost: '4,00 €',
          alergen: {}
        },
        {
          title: 'Queso',
          caption: 'Cured cheese',
          image: 'no-image.png',
          cost: '4,00 €',
          alergen: {}
        },
        {
          title: 'Bacon y queso',
          caption: 'Bacon and cheese',
          image: 'no-image.png',
          cost: '4,00 €',
          alergen: {}
        },
        {
          title: 'Chorizo',
          caption: 'Red sausage',
          image: 'no-image.png',
          cost: '3,50 €',
          alergen: {}
        },
        {
          title: 'Tortilla de patata',
          caption: 'Spanish potato omelette',
          image: 'no-image.png',
          cost: '3,50 €',
          alergen: {}
        },
        {
          title: 'Tortilla francesa',
          caption: 'Omelette',
          image: 'no-image.png',
          cost: '3,50 €',
          alergen: {}
        },
        {
          title: 'Tortilla de chorizo, jamón serrano o atún',
          caption: 'Red sausage, serrano ham or tuna',
          image: 'no-image.png',
          cost: '4,00 €',
          alergen: {}
        },
        {
          title: 'Sándwich mixto',
          caption: 'Ham and cheese sandwich',
          image: 'bocadillos_sandwichmixto.PNG',
          cost: '3,50 €',
          alergen: {}
        },
        {
          title: 'Sánwich vegetal: lechuga, huevo, mayonesa, tomate y atún',
          caption: 'Veggie sandwich: lettuce, egg, tomato, tuna and mayo sauce',
          image: 'bocadillos_sandwichvegetal.PNG',
          cost: '3,50 €',
          alergen: {}
        }
      ]
    }
  }
}
</script>
