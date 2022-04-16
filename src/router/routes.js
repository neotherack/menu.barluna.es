const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/breakfast', component: () => import('pages/Breakfast.vue'), props: { title: 'breakfast' } },
      { path: '/sandwiches', component: () => import('pages/Sandwiches.vue'), props: { title: 'sandwiches' } },
      { path: '/salads', component: () => import('pages/Salads.vue'), props: { title: 'salads' } },
      { path: '/starters', component: () => import('pages/Starters.vue'), props: { title: 'starters' } },
      { path: '/maincourses', component: () => import('pages/MainCourses.vue'), props: { title: 'maincourses' } },
      { path: '/desserts', component: () => import('pages/Desserts.vue'), props: { title: 'desserts' } },
      { path: '/drinks', component: () => import('pages/Drinks.vue'), props: { title: 'drinks' } },
      { path: '/allergens', component: () => import('pages/Allergens.vue'), props: { title: 'allergens' } },
      { path: '/', component: () => import('pages/DailyMenu.vue'), props: { title: 'daily' } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
