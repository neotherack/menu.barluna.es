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
          image: 'raciones_bravas.png',
          cost: '5,50 €',
          allergens: [{ name: 'huevos' }]
        },
        {
          title: 'Patatas bravas [mediana]',
          caption: 'Fried potatoes [medium size](mayo and tomato sauce)',
          image: 'raciones_bravas.png',
          cost: '3,50 €',
          allergens: [{ name: 'huevos' }]
        },
        {
          title: 'Puntillitas',
          caption: 'Tiny fried-battered squid',
          image: 'raciones_chipirones.png',
          cost: '10,00 €',
          allergens: [{ name: 'huevos' }, { name: 'soja' }, { name: 'lacteos' }, { name: 'gluten' }, { name: 'pescado' }, { name: 'apio' }, { name: 'sulfitos' }, { name: 'mostaza' }]
        },
        {
          title: 'Zamburiñas',
          caption: 'Scallops',
          image: 'no-image.png',
          cost: '16,00 €',
          allergens: [{ name: 'crustaceos' }, { name: 'sulfitos' }, { name: 'pescado' }, { name: 'sulfitos' }]
        },
        {
          title: 'Gambones',
          caption: 'Large grilled shrimps',
          image: 'raciones_gambones.png',
          cost: '14,00 €',
          allergens: [{ name: 'crustaceos' }, { name: 'sulfitos' }]
        },
        {
          title: 'Boquerones en vinagre',
          caption: 'Vinegar marinated anchovies',
          image: 'raciones_boquerones.png',
          cost: '9,00 €',
          allergens: [{ name: 'pescado' }, { name: 'sulfitos' }]
        },
        {
          title: 'Croquetas de cecina',
          caption: 'Jerky croquettes',
          image: 'raciones_croquetas_cecina.jpg',
          cost: '10,50 €',
          allergens: [{ name: 'crustaceos' }, { name: 'moluscos' }, { name: 'soja' }, { name: 'lacteos' }, { name: 'gluten' }, { name: 'pescado' }]
        },
        {
          title: 'Croquetas de jamón',
          caption: 'Serrano ham croquettes',
          image: 'raciones_croquetas_jamon.jpg',
          cost: '10,50 €',
          allergens: [{ name: 'crustaceos' }, { name: 'moluscos' }, { name: 'soja' }, { name: 'lacteos' }, { name: 'gluten' }, { name: 'pescado' }]
        },
        {
          title: 'Torreznos de Soria (2 unidades)',
          caption: 'Thick bacon rashers (2 units)',
          image: 'entrantes_torreznos.png',
          cost: '7,50 €',
          allergens: []
        },
        {
          title: 'Chorizo a la sidra',
          caption: 'Cider boiled red saussage',
          image: 'raciones_chorizosidra.png',
          cost: '4,00 €',
          allergens: [{ name: 'sulfitos' }],
          flags: [{ name: 'asturias' }]
        },
        {
          title: 'Pastel de cabracho',
          caption: 'Red scorpionfish pie',
          image: 'entrantes_pastel_cabracho.png',
          cost: '10,50€',
          allergens: [{ name: 'lacteos' }, { name: 'huevos' }, { name: 'pescado' }],
          flags: [{ name: 'asturias' }]
        },
        {
          title: 'Cecina de León',
          caption: 'Jerky (cured cow meat)',
          image: 'raciones_cecina.png',
          cost: '12,00€',
          allergens: [],
          flags: [{ name: 'leon' }]
        },
        {
          title: 'Jamón serrano',
          caption: 'Cured pork ham',
          image: 'raciones_jamon.png',
          cost: '9,00€',
          allergens: []
        },
        {
          title: 'Ración de queso',
          caption: 'Cured cheese',
          image: 'raciones_queso.png',
          cost: '9,00€',
          allergens: [{ name: 'lacteos' }]
        }
      ]
    }
  }
}
</script>
