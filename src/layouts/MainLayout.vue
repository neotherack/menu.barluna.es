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

        <q-toolbar-title>
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
      menutitle: 'Categories',
      version: '1.0',
      leftDrawerOpen: true,
      essentialLinks: [
        {
          title: 'Desayunos',
          caption: 'Breakfast',
          icon: 'local_cafe',
          link: '#/breakfast'
        },
        {
          title: 'Bocadillos',
          caption: 'Sandwiches',
          icon: 'local_restaurant',
          link: '#/sandwiches'
        },
        {
          title: 'Ensaladas',
          caption: 'Salads',
          icon: 'local_restaurant',
          link: '#/salads'
        },
        {
          title: 'Entrantes',
          caption: 'Starters',
          icon: 'local_restaurant',
          link: '#/starters'
        },
        {
          title: 'Principales',
          caption: 'Main courses',
          icon: 'local_restaurant',
          link: '#/maincourses'
        },
        {
          title: 'Postres',
          caption: 'Desserts',
          icon: 'cake',
          link: '#/desserts'
        },
        {
          title: 'Bebidas',
          caption: 'Drinks',
          icon: 'local_bar',
          link: '#/drinks'
        },
        {
          title: 'Menús',
          caption: 'Set meals',
          icon: 'local_dining',
          link: '#/setmeals'
        },
        {
          title: 'Alergenos',
          caption: 'Alergens',
          icon: 'priority_high',
          link: '#/alergens'
        },
        {
          title: 'Facebook',
          caption: 'Visitanos - Visit us',
          icon: 'public',
          link: 'https://facebook.com/barlunasahagun'
        },
        {
          title: 'TripAdvisor',
          caption: 'Puntuanos - Rate us',
          icon: 'favorite',
          link: 'https://www.tripadvisor.es/Restaurant_Review-g676288-d8381001-Reviews-Bar_Luna-Sahagun_Province_of_Leon_Castile_and_Leon.html'
        }
      ]
    }
  }
}
</script>
