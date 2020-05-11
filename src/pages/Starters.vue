<template>
  <q-page class="flex flex-center row text-center">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Entrantes</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Starters</div>
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
  name: 'Starters',
  components: { Item },

  data () {
    return {
      list: [
        {
          title: 'Patatas bravas [grande]',
          caption: 'Fried potatoes [large] (mayo and tomato sauce)',
          image: 'raciones_bravas.PNG',
          cost: '5,00 €',
          alergen: {}
        },
        {
          title: 'Patatas bravas [mediana]',
          caption: 'Fried potatoes [medium size](mayo and tomato sauce)',
          image: 'raciones_bravas.PNG',
          cost: '3,00 €',
          alergen: {}
        },
        {
          title: 'Puntillitas',
          caption: 'Tiny fried-battered squid',
          image: 'raciones_chipirones.PNG',
          cost: '8,50 €',
          alergen: {}
        },
        {
          title: 'Gambones',
          caption: 'Large grilled shrimps',
          image: 'no-image.png',
          cost: '12,80 €',
          alergen: {}
        },
        {
          title: 'Boquerones en vinagre',
          caption: 'Vinegar marinated anchovies',
          image: 'raciones_boquerones.PNG',
          cost: '8,00 €',
          alergen: {}
        },
        {
          title: 'Croquetas de cecina',
          caption: 'Jerky croquettes',
          image: 'no-image.png',
          cost: '7,50 €',
          alergen: {}
        },
        {
          title: 'Croquetas de boletus con trufa',
          caption: 'Boletus and truffle croquettes',
          image: 'no-image.png',
          cost: '7,50 €',
          alergen: {}
        },
        {
          title: 'Champiñones',
          caption: 'Mushrooms',
          image: 'no-image.png',
          cost: '7,80 €',
          alergen: {}
        },
        {
          title: 'Torreznos de soria (2 unidades)',
          caption: 'Thick bacon rashers (2 units)',
          image: 'no-image.png',
          cost: '6,00 €',
          alergen: {}
        },
        {
          title: 'Chorizo a la sidra',
          caption: 'Cider boiled red saussage',
          image: 'raciones_chorizosidra.PNG',
          cost: '3,50 €',
          alergen: {}
        },
        {
          title: 'Pastel de cabracho',
          caption: 'Red scorpionfish pie',
          image: 'no-image.png',
          cost: '9,00€',
          alergen: {}
        },
        {
          title: 'Ración de cecina de león',
          caption: 'Jerky (cured cow meat)',
          image: 'raciones_cecina.PNG',
          cost: '10,00€',
          alergen: {}
        },
        {
          title: 'Chosco',
          caption: 'Cured pork meat',
          image: 'no-image.png',
          cost: '10,00€',
          alergen: {}
        },
        {
          title: 'Ración de jamón serrano',
          caption: 'Cured pork ham',
          image: 'raciones_jamon.PNG',
          cost: '9,00€',
          alergen: {}
        },
        {
          title: 'Ración de queso',
          caption: 'Cured cheese',
          image: 'raciones_queso.PNG',
          cost: '9,00€',
          alergen: {}
        }
      ]
    }
  }
}
</script>
