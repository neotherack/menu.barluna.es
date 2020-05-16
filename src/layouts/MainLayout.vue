<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="text-h5">
          {{ place }}
        </q-toolbar-title>

        <div>v{{ version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          {{ menutitle }}
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      place: 'Bar Luna - Sahagún (León)',
      menutitle: 'Menu',
      version: '1.1',
      leftDrawerOpen: true,
      essentialLinks: [
        {
          title: 'Desayunos',
          caption: 'Breakfast',
          icon: 'fas fa-coffee',
          link: '#/breakfast'
        },
        {
          title: 'Bocadillos',
          caption: 'Sandwiches',
          icon: 'fas fa-hamburger',
          link: '#/sandwiches'
        },
        {
          title: 'Ensaladas',
          caption: 'Salads',
          icon: 'fas fa-carrot',
          link: '#/salads'
        },
        {
          title: 'Entrantes',
          caption: 'Starters',
          icon: 'fas fa-pizza-slice',
          link: '#/starters'
        },
        {
          title: 'Principales',
          caption: 'Main courses',
          icon: 'fas fa-utensil-spoon',
          link: '#/maincourses'
        },
        {
          title: 'Postres',
          caption: 'Desserts',
          icon: 'fas fa-ice-cream',
          link: '#/desserts'
        },
        {
          title: 'Bebidas',
          caption: 'Drinks',
          icon: 'fas fa-glass-cheers',
          link: '#/drinks'
        },
        {
          title: 'Menús',
          caption: 'Set meals',
          icon: 'fas fa-utensils',
          link: '#/setmeals'
        },
        {
          title: 'Alérgenos',
          caption: 'Allergens',
          icon: 'fas fa-exclamation-triangle',
          link: '#/allergens'
        },
        {
          title: 'Facebook',
          caption: 'Visítanos - Visit us',
          icon: 'fab fa-facebook-square',
          link: 'https://facebook.com/barlunasahagun'
        },
        {
          title: 'TripAdvisor',
          caption: 'Puntúanos - Rate us',
          icon: 'fab fa-tripadvisor',
          link: 'https://www.tripadvisor.es/Restaurant_Review-g676288-d8381001-Reviews-Bar_Luna-Sahagun_Province_of_Leon_Castile_and_Leon.html'
        },
        {
          title: 'Google Maps',
          caption: 'Puntúanos - Rate us',
          icon: 'fab fa-google',
          link: 'https://www.google.es/maps/place/Bar+Luna/@42.3723441,-5.033269,17z/data=!3m1!4b1!4m5!3m4!1s0xd47ff3a80563221:0xe6a366de01fc7c82!8m2!3d42.3723441!4d-5.0310803'
        }
      ]
    }
  }
}
</script>
