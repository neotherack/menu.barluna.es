<template>
  <q-page class="flex row text-center justify-around">
    <div class="q-ma-sm col-11 text-h4 text-weight-medium">Menús</div>
    <div class="q-ma-sm col-11 text-h4 text-weight-medium text-italic">Set meals</div>
    <q-card class="col-11 col-md-5 q-pa-md q-ma-lg">
      <div class="text-h4 text-blue text-left">{{ menu1.name }}</div>
      <div class="text-h4 text-left">{{ menu1.caption }}</div>
      <div class="text-h3 text-weight-bold text-right q-ma-md">{{ menu1.cost }}</div>
      <q-separator class="q-ma-md"/>
      <q-card-section vertical
          v-for="element in menu1.info"
          :key="element.title"
          v-bind="element"
          class="q-my-md">
        <div class="text-h6 text-weight-bold text-blue text-left">{{ element.title }}</div>
        <div class="text-h6 text-weight-medium text-left">{{ element.caption }}</div>
        <AllergenIcon
              v-for="allergen in element.allergens"
              :key="allergen.name"
              v-bind:name="allergen.name"
            />
        <q-separator />
      </q-card-section>
      <div class="text-subtitle1 text-weight-bold text-red">
        <q-icon name="fas fa-exclamation-triangle"></q-icon>
        <q-space/>
        {{ menu1.comments }}
      </div>
    </q-card>

    <q-card class="col-11 col-md-5 q-pa-md q-ma-lg">
      <div class="text-h4 text-blue text-left">{{ menu2.name }}</div>
      <div class="text-h4 text-left">{{ menu2.caption }}</div>
      <div class="text-h3 text-weight-bold text-right q-ma-md">{{ menu2.cost }}</div>
      <q-separator class="q-ma-md"/>
      <q-card-section vertical
          v-for="element in menu2.info"
          :key="element.title"
          v-bind="element"
          class="q-my-md">
        <div class="text-h6 text-weight-bold text-blue text-left">{{ element.title }}</div>
        <div class="text-h6 text-weight-medium text-left">{{ element.caption }}</div>
        <AllergenIcon
              v-for="allergen in element.allergens"
              :key="allergen.name"
              v-bind:name="allergen.name"
            />
        <q-separator class="q-my-sm"/>
      </q-card-section>
      <div class="text-subtitle1 text-weight-bold">
        <q-icon name="fas fa-user-friends"></q-icon>
        <q-space/>
        {{ menu2.size }}
      </div>
      <div class="text-subtitle1 text-weight-bold text-red">
        <q-icon name="fas fa-exclamation-triangle"></q-icon>
        <q-space/>
        {{ menu2.comments }}
      </div>
    </q-card>
  </q-page>
</template>

<script>
import AllergenIcon from 'components/AllergenIcon'

export default {
  name: 'SetMeals',
  components: { AllergenIcon },
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
            allergens: []
          },
          {
            title: 'Gambones a la plancha',
            caption: 'Large grilled shrimps',
            allergens: [{ name: 'sulfitos' }, { name: 'crustaceos' }]
          },
          {
            title: 'Carrilleras ibéricas en salsa con patatas fritas y ensalada',
            caption: 'Veal cheek stew with fries and salad',
            allergens: [{ name: 'sulfitos' }]
          },
          {
            title: 'Postre',
            caption: 'Dessert',
            allergens: []
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
            allergens: [{ name: 'lacteos' }, { name: 'huevos' }, { name: 'pescado' }]
          },
          {
            title: 'Gambones a la plancha',
            caption: 'Large grilled shrimps',
            allergens: [{ name: 'sulfitos' }, { name: 'crustaceos' }]
          },
          {
            title: 'Calamares a la romana',
            caption: 'Fried-battered squid',
            allergens: [{ name: 'gluten' }, { name: 'moluscos' }, { name: 'soja' }]
          },
          {
            title: 'Chuletas de cordero lechal',
            caption: 'Grilled veal chops',
            allergens: []
          },
          {
            title: 'Croquetas de cecina',
            caption: 'Jerky croquettes',
            allergens: [{ name: 'gluten' }, { name: 'moluscos' }, { name: 'soja' }, { name: 'crustaceos' }, { name: 'lacteos' }, { name: 'pescado' }]
          },
          {
            title: 'Ensalada',
            caption: 'Salad',
            allergens: []
          }
        ]
      }
    }
  }
}
</script>
