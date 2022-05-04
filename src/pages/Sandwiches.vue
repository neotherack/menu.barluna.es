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
          image: 'bocadillos_calamares.png',
          cost: '4,50 €',
          allergens: [{ name: 'gluten' }, { name: 'moluscos' }, { name: 'soja' }]
        },
        {
          title: 'Jamón serrano',
          caption: 'Serrano ham',
          image: 'bocadillos_jamon.png',
          cost: '4,50 €',
          allergens: [{ name: 'gluten' }]
        },
        {
          title: 'Queso',
          caption: 'Cured cheese',
          image: 'bocadillos_queso.png',
          cost: '4,50 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        },
        {
          title: 'Bacon y queso',
          caption: 'Bacon and cheese',
          image: 'bocadillos_bacon_queso.png',
          cost: '4,50 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }]
        },
        {
          title: 'Chorizo',
          caption: 'Red sausage',
          image: 'bocadillos_chorizo.png',
          cost: '4,00 €',
          allergens: [{ name: 'gluten' }]
        },
        {
          title: 'Tortilla de patata',
          caption: 'Spanish potato omelette',
          image: 'bocadillos_tortilla_patata.png',
          cost: '4,00 €',
          allergens: [{ name: 'gluten' }, { name: 'huevos' }]
        },
        {
          title: 'Tortilla francesa',
          caption: 'Omelette',
          image: 'bocadillos_tortilla_francesa.png',
          cost: '4,50 €',
          allergens: [{ name: 'gluten' }, { name: 'huevos' }]
        },
        {
          title: 'Tortilla de chorizo, jamón serrano o atún',
          caption: 'Red sausage, serrano ham or tuna',
          image: 'bocadillos_tortilla_otros.png',
          cost: '4,50 €',
          allergens: [{ name: 'gluten' }, { name: 'pescado' }]
        },
        {
          title: 'Sándwich mixto',
          caption: 'Ham and cheese sandwich',
          image: 'bocadillos_sandwichmixto.png',
          cost: '4,00 €',
          allergens: [{ name: 'gluten' }, { name: 'lacteos' }, { name: 'soja' }]
        },
        {
          title: 'Sándwich vegetal: lechuga, huevo, mayonesa, tomate y atún',
          caption: 'Veggie sandwich: lettuce, egg, tomato, tuna and mayo sauce',
          image: 'bocadillos_sandwichvegetal.png',
          cost: '4,00 €',
          allergens: [{ name: 'gluten' }, { name: 'huevos' }, { name: 'pescado' }, { name: 'lacteos' }]
        }
      ]
    }
  }
}
</script>
