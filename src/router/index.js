import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { title: 'Attacker - Dashboard' },
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/example',
    name: 'example',
    meta: { title: 'Attacker - Example Page' },
    component: () => import('../views/ExampleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  if (_to.meta.title) {
    document.title = _to.meta.title;
  } else {
    document.title = 'Group 7 - Attacker';
  }
  await next();
  NProgress.done();
});

export default router
