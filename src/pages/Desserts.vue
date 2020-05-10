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
          title: 'CREMA DE LIMÓN',
          caption: 'LEMON CREAM',
          image: 'no-image.png',
          cost: '3,50 €',
          alergen: {}
        },
        {
          title: 'TARTA DE LA ABUELA',
          caption: 'GRANDMA’s CAKE',
          image: 'no-image.png',
          cost: '3,50 €',
          alergen: {}
        },
        {
          title: 'BRAZO DE GITANO',
          caption: 'SWISS ROLL',
          image: 'no-image.png',
          cost: '3,50 €',
          alergen: {}
        },
        {
          title: 'TARTA COMTESSA',
          caption: 'ICE CREAM CAKE',
          image: 'no-image.png',
          cost: '3,50 €',
          alergen: {}
        },
        {
          title: 'FRUTA DEL TIEMPO',
          caption: 'FRUIT (Seasonal)',
          image: 'no-image.png',
          cost: '2,50 €',
          alergen: {}
        }
      ]
    }
  }
}
</script>
