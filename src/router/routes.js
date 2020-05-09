
const routes = [
  {
    path: '/#',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/breakfast', component: () => import('pages/Test.vue'), props: { title: 'breakfast' } },
      { path: '/sandwiches', component: () => import('pages/Test.vue'), props: { title: 'sandwiches' } },
      { path: '/salads', component: () => import('pages/Test.vue'), props: { title: 'salads' } },
      { path: '/starters', component: () => import('pages/Test.vue'), props: { title: 'starters' } },
      { path: '/maincourses', component: () => import('pages/Test.vue'), props: { title: 'maincourses' } },
      { path: '/desserts', component: () => import('pages/Test.vue'), props: { title: 'desserts' } },
      { path: '/drinks', component: () => import('pages/Test.vue'), props: { title: 'drinks' } },
      { path: '/setmeals', component: () => import('pages/Test.vue'), props: { title: 'setmeals' } },
      { path: '/alergens', component: () => import('pages/Test.vue'), props: { title: 'alergens' } }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
