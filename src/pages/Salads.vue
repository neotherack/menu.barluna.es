<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Ensaladas</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Salads</div>
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
  name: 'Salads',
  components: { Item },

  data () {
    return {
      list: [
        {
          title: 'MIXTA: Lechuga, tomate, cebolla, maíz, atún, huevo cocido y espárrago',
          caption: 'MIXED: Lettuce, tomato, onion, corn, tuna, egg and asparagus',
          image: 'ensaladas_mixta.png',
          cost: '8,50 €',
          allergens: [{ name: 'pescado' }, { name: 'huevos' }]
        },
        {
          title: 'PIPIRRANA: Atún, tomate, pimiento rojo y verde, pepino, cebolla y huevo cocido',
          caption: 'PIPIRRANA: Tuna, tomato, pepper, cucumber, onion and boiled egg',
          image: 'ensaladas_pipirana.png',
          cost: '10,00 €',
          allergens: [{ name: 'pescado' }, { name: 'huevos' }]
        },
        {
          title: 'FRUTAS: Lechuga, tomate, naranja, melocotón, nueces, queso y piña',
          caption: 'FRUIT: Lettuce, tomato, orange, peach, walnuts, cheese and pineapple',
          image: 'ensaladas_frutas.png',
          cost: '9,50 €',
          allergens: [{ name: 'lacteos' }, { name: 'frutoscascara' }]
        },
        {
          title: 'CECINA Y QUESO DE CABRA: lechuga, tomate, cecina, queso de cabra y crujiente de cebolla',
          caption: 'JERKY (cured cow meat) & GOAT CHEESE: lettuce, tomato, jerky, goat cheese and crispy onion',
          image: 'no-image.png',
          cost: '10,50 €',
          allergens: [{ name: 'lacteos' }]
        },
        {
          title: 'JAMÓN YORK Y QUESO: lechuga, jamón york, queso, maíz, piña y nueces',
          caption: 'HAM & CHEESE: lettuce, ham, cheese, corn, pineapple and walnuts',
          image: 'ensaladas_jamonyorkqueso.png',
          cost: '10,00 €',
          allergens: [{ name: 'lacteos' }, { name: 'frutoscascara' }, { name: 'soja' }]
        },
        {
          title: 'MANZANA, FRUTOS SECOS Y PASAS: lechuga, manzana, nueces, tomate, pasas y queso',
          caption: 'APPLE, WALNUTS AND RAISINS: lettuce, apple, walnuts, tomato, raisins and cured cheese',
          image: 'no-image.png',
          cost: '10,00 €',
          allergens: [{ name: 'lacteos' }, { name: 'frutoscascara' }]
        },
        {
          title: 'ENSALADILLA RUSA [Mediana]',
          caption: 'SPANISH POTATO SALAD [Medium size]: potato, tuna, mayo, egg, green peas and seafood sticks',
          image: 'ensaladas_ensaladilla.png',
          cost: '5,00 €',
          allergens: [{ name: 'crustaceos' }, { name: 'huevos' }, { name: 'pescado' }, { name: 'moluscos' }]
        },
        {
          title: 'ENSALADILLA RUSA [Grande]',
          caption: 'SPANISH POTATO SALAD [Large]: potato, tuna, mayo, egg, green peas and seafood sticks',
          image: 'ensaladas_ensaladilla.png',
          cost: '8,00 €',
          allergens: [{ name: 'crustaceos' }, { name: 'huevos' }, { name: 'pescado' }, { name: 'moluscos' }]
        }
      ]
    }
  }
}
</script>
