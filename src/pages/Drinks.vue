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
          image: 'bebidas_ramonbilbao.png',
          cost: '15,00 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Faustino - Rioja (tinto)',
          caption: 'Faustino - Rioja (red wine)',
          image: 'bebidas_rioja.png',
          cost: '12,00 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Prado Rey - Ribera del Duero (tinto)',
          caption: 'Prado Rey - Ribera del Duero (red wine)',
          image: 'bebidas_ribera.png',
          cost: '12,00 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Protos - Ribera del Duero (tinto)',
          caption: 'Protos - Ribera del Duero (red wine)',
          image: 'bebidas_protos.png',
          cost: '15,00 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Bierzo (tinto)',
          caption: 'Bierzo (red wine)',
          image: 'bebidas_bierzo.png',
          cost: '9,00 €',
          allergens: [{ name: 'sulfitos' }],
          flags: [{ name: 'leon' }]
        },
        {
          title: 'Prieto Picudo (tinto)',
          caption: 'Prieto Picudo (red wine)',
          image: 'bebidas_prietotinto.png',
          cost: '9,00 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Prieto Picudo (rosado)',
          caption: 'Prieto Picudo (rosé wine)',
          image: 'bebidas_prietopicudo.png',
          cost: '9,00 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Verdejo (blanco)',
          caption: 'Verdejo (white wine)',
          image: 'bebidas_verdejo.png',
          cost: '9,00 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Albariño (blanco)',
          caption: 'Albariño (white wine)',
          image: 'bebidas_albarino.png',
          cost: '9,00 €',
          allergens: [{ name: 'sulfitos' }]
        },
        {
          title: 'Vino de la casa (tinto, rosado o blanco)',
          caption: 'Table wine (red, rosé or white wine)',
          image: 'bebidas_vinomesa.png',
          cost: '6,00 €',
          allergens: [{ name: 'sulfitos' }]
        }
      ]
    }
  }
}
</script>
