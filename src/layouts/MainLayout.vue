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
          title: 'Breakfast',
          caption: 'caption pending',
          icon: 'local_cafe',
          link: '#/breakfast'
        },
        {
          title: 'Sandwiches',
          caption: 'caption pending',
          icon: 'local_restaurant',
          link: '#/sandwiches'
        },
        {
          title: 'Salads',
          caption: 'caption pending',
          icon: 'local_restaurant',
          link: '#/salads'
        },
        {
          title: 'Starters',
          caption: 'caption pending',
          icon: 'local_restaurant',
          link: '#/starters'
        },
        {
          title: 'Main courses',
          caption: 'caption pending',
          icon: 'local_restaurant',
          link: '#/maincourses'
        },
        {
          title: 'Desserts',
          caption: 'caption pending',
          icon: 'cake',
          link: '#/desserts'
        },
        {
          title: 'Drinks',
          caption: 'caption pending',
          icon: 'local_bar',
          link: '#/drinks'
        },
        {
          title: 'Set meals',
          caption: 'caption pending',
          icon: 'local_dining',
          link: '#/setmeals'
        },
        {
          title: 'Alergens',
          caption: 'Check all info about alergens',
          icon: 'priority_high',
          link: '#/alergens'
        },
        {
          title: 'Facebook',
          caption: 'Visit us',
          icon: 'public',
          link: 'https://facebook.com/barlunasahagun'
        },
        {
          title: 'TripAdvisor',
          caption: 'Rate us',
          icon: 'favorite',
          link: 'https://www.tripadvisor.es/Restaurant_Review-g676288-d8381001-Reviews-Bar_Luna-Sahagun_Province_of_Leon_Castile_and_Leon.html'
        }
      ]
    }
  }
}
</script>
