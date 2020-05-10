<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Bebidas</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Drinks</div>
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
  name: 'Drinks',
  components: { Item },

  data () {
    return {
      list: [
        {
          title: 'Ramón Bilbao (tinto)',
          caption: 'Ramón Bilbao (red wine)',
          image: 'no-image.png',
          cost: '12,00 €',
          alergen: {}
        },
        {
          title: 'Rioja (tinto)',
          caption: 'Rioja (red wine)',
          image: 'no-image.png',
          cost: '9,00 €',
          alergen: {}
        },
        {
          title: 'Ribera del Duero (tinto)',
          caption: 'Ribera del Duero (red wine)',
          image: 'no-image.png',
          cost: '9,00 €',
          alergen: {}
        },
        {
          title: 'Bierzo (tinto)',
          caption: 'Bierzo (red wine)',
          image: 'no-image.png',
          cost: '7,00 €',
          alergen: {}
        },
        {
          title: 'Prieto Picudo (rosado)',
          caption: 'Prieto Picudo (rosé wine)',
          image: 'no-image.png',
          cost: '7,00 €',
          alergen: {}
        },
        {
          title: 'Verdejo (blanco)',
          caption: 'Verdejo (white wine)',
          image: 'no-image.png',
          cost: '7,00 €',
          alergen: {}
        },
        {
          title: 'Albariño (blanco)',
          caption: 'Albariño (white wine)',
          image: 'no-image.png',
          cost: '9,00 €',
          alergen: {}
        },
        {
          title: 'Vino de la casa (tinto, rosado o blanco)',
          caption: 'Table wine (red, rosé or white wine)',
          image: 'no-image.png',
          cost: '4,00 €',
          alergen: {}
        }
      ]
    }
  }
}
</script>
