import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f2b2860a = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _82e6d77c = () => interopDefault(import('../pages/books/index.vue' /* webpackChunkName: "pages/books/index" */))
const _7de39b56 = () => interopDefault(import('../pages/maps/index.vue' /* webpackChunkName: "pages/maps/index" */))
const _1c01b3e3 = () => interopDefault(import('../pages/tables/index.vue' /* webpackChunkName: "pages/tables/index" */))
const _bcda3b34 = () => interopDefault(import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _389dbe2d = () => interopDefault(import('../pages/books/_id/index.vue' /* webpackChunkName: "pages/books/_id/index" */))
const _73a7ca80 = () => interopDefault(import('../pages/maps/_id/index.vue' /* webpackChunkName: "pages/maps/_id/index" */))
const _dd6fb564 = () => interopDefault(import('../pages/tables/_id/index.vue' /* webpackChunkName: "pages/tables/_id/index" */))
const _7713ff74 = () => interopDefault(import('../pages/books/_id/_chapter/index.vue' /* webpackChunkName: "pages/books/_id/_chapter/index" */))
const _5e73bb27 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _f2b2860a,
    name: "articles"
  }, {
    path: "/books",
    component: _82e6d77c,
    name: "books"
  }, {
    path: "/maps",
    component: _7de39b56,
    name: "maps"
  }, {
    path: "/tables",
    component: _1c01b3e3,
    name: "tables"
  }, {
    path: "/articles/:id",
    component: _bcda3b34,
    name: "articles-id"
  }, {
    path: "/books/:id",
    component: _389dbe2d,
    name: "books-id"
  }, {
    path: "/maps/:id",
    component: _73a7ca80,
    name: "maps-id"
  }, {
    path: "/tables/:id",
    component: _dd6fb564,
    name: "tables-id"
  }, {
    path: "/books/:id/:chapter",
    component: _7713ff74,
    name: "books-id-chapter"
  }, {
    path: "/",
    component: _5e73bb27,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
