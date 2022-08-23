import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ebeda31c = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _1eb96e2b = () => interopDefault(import('../pages/books/index.vue' /* webpackChunkName: "pages/books/index" */))
const _eb4c1168 = () => interopDefault(import('../pages/maps/index.vue' /* webpackChunkName: "pages/maps/index" */))
const _7d1fd1cc = () => interopDefault(import('../pages/tables/index.vue' /* webpackChunkName: "pages/tables/index" */))
const _62e1c05d = () => interopDefault(import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _bced08d4 = () => interopDefault(import('../pages/books/_id/index.vue' /* webpackChunkName: "pages/books/_id/index" */))
const _6ce2e792 = () => interopDefault(import('../pages/maps/_id/index.vue' /* webpackChunkName: "pages/maps/_id/index" */))
const _45d41505 = () => interopDefault(import('../pages/tables/_id/index.vue' /* webpackChunkName: "pages/tables/_id/index" */))
const _c2e36e06 = () => interopDefault(import('../pages/books/_id/_chapter/index.vue' /* webpackChunkName: "pages/books/_id/_chapter/index" */))
const _9fbf1060 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ebeda31c,
    name: "articles"
  }, {
    path: "/books",
    component: _1eb96e2b,
    name: "books"
  }, {
    path: "/maps",
    component: _eb4c1168,
    name: "maps"
  }, {
    path: "/tables",
    component: _7d1fd1cc,
    name: "tables"
  }, {
    path: "/articles/:id",
    component: _62e1c05d,
    name: "articles-id"
  }, {
    path: "/books/:id",
    component: _bced08d4,
    name: "books-id"
  }, {
    path: "/maps/:id",
    component: _6ce2e792,
    name: "maps-id"
  }, {
    path: "/tables/:id",
    component: _45d41505,
    name: "tables-id"
  }, {
    path: "/books/:id/:chapter",
    component: _c2e36e06,
    name: "books-id-chapter"
  }, {
    path: "/",
    component: _9fbf1060,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
