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
    path: '/forcelogin',
    name: 'forcelogin',
    meta: { title: 'Vulnerable Application - forcelogin' },
    component: () => import('../views/ForceLoginView.vue')
  },
  {
    path: '/sessionswapping_github_sf',
    name: 'sessionswapping_github_sf',
    meta: { title: 'Vulnerable Application - sessionswapping_github_sf' },
    component: () => import('../views/SessionSwappingView.vue')
  },
  {
    path: '/sessionswapping_twitter',
    name: 'sessionswapping_twitter',
    meta: { title: 'Vulnerable Application - sessionswapping_twitter' },
    component: () => import('../views/SessionSwappingTwitterView.vue')
  },
  {
    path: '/auto_sessionswaping_github',
    name: 'auto_sessionswaping_github',
    meta: { title: 'Vulnerable Application - auto_sessionswaping_github' },
    component: () => import('../views/AutoSessionSwapingGithubView.vue')
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
