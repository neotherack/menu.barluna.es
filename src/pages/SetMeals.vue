<template>
  <q-page class="flex row text-center justify-around">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Menús</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Set meals</div>
    <q-card class="col-11 col-md-5 q-pa-sm">
      <div class="text-h4 text-blue text-left">{{ menu1.name }}</div>
      <div class="text-h4 text-left">{{ menu1.caption }}</div>
      <div class="text-h2 text-weight-bold text-right">{{ menu1.cost }}</div>
      <q-card-section vertical
          v-for="element in menu1.info"
          :key="element.title"
          v-bind="element"
          class="q-my-md">
        <div class="text-h6 text-weight-bold text-blue text-left">{{ element.title }}</div>
        <div class="text-h6 text-weight-medium text-left">{{ element.caption }}</div>
        <q-separator />
      </q-card-section>
      <div class="text-subtitle1 text-weight-bold text-red">{{ menu1.comments }}</div>
    </q-card>
    <q-card class="col-11 col-md-5">
      <div class="text-h4 text-weight-bold text-blue text-left">{{ menu2.name }}</div>
      <div class="text-h4 text-weight-bold text-left">{{ menu2.caption }}</div>
      <div class="text-h2 text-weight-bold text-right">{{ menu2.cost }}</div>
      <q-card-section vertical
          v-for="element in menu2.info"
          :key="element.title"
          v-bind="element"
          class="q-my-md">
        <div class="text-h6 text-weight-bold text-blue text-left">{{ element.title }}</div>
        <div class="text-h6 text-weight-medium text-left">{{ element.caption }}</div>
        <q-separator class="q-my-sm"/>
      </q-card-section>
      <div class="text-subtitle1 text-weight-bold text-black">{{ menu2.size }}</div>
      <div class="text-subtitle1 text-weight-bold text-red">{{ menu2.comments }}</div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'SetMeals',
  data () {
    return {
      menu1: {
        name: 'Menú Fin de Semana',
        caption: 'Weekend Meal',
        comments: 'Bebidas no incluídas - Drinks not included',
        cost: '14,00 €',
        info: [
          {
            title: 'Jamón serrano',
            caption: 'Serrano ham',
            alergen: {}
          },
          {
            title: 'Gambones a la plancha',
            caption: 'Large grilled shrimps',
            alergen: {}
          },
          {
            title: 'Carrilleras ibéricas en salsa con patatas fritas y ensalada',
            caption: 'Veal cheek stew with fries and salad',
            alergen: {}
          },
          {
            title: 'Postre',
            caption: 'Dessert',
            alergen: {}
          }
        ]
      },
      menu2: {
        name: 'Tabla Mar y Tierra',
        caption: 'Sea and Land table',
        comments: 'Bebidas no incluídas - Drinks not included',
        size: 'Para dos personas - For two people',
        cost: '22,00 €',
        info: [
          {
            title: 'Pastel de cabracho',
            caption: 'Red scorpionfish pie',
            alergen: {}
          },
          {
            title: 'Gambones a la plancha',
            caption: 'Large grilled shrimps',
            alergen: {}
          },
          {
            title: 'Calamares a la romana',
            caption: 'Fried-battered squid',
            alergen: {}
          },
          {
            title: 'Chuletas de cordero lechal',
            caption: 'Grilled veal chops',
            alergen: {}
          },
          {
            title: 'Croquetas de cecina',
            caption: 'Jerky croquettes',
            alergen: {}
          },
          {
            title: 'Ensalada',
            caption: 'Salad',
            alergen: {}
          }
        ]
      }
    }
  }
}
</script>
