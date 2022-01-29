import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eea05198 = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _a7d166ae = () => interopDefault(import('../pages/books/index.vue' /* webpackChunkName: "pages/books/index" */))
const _f2b15de4 = () => interopDefault(import('../pages/maps/index.vue' /* webpackChunkName: "pages/maps/index" */))
const _4063ef48 = () => interopDefault(import('../pages/tables/index.vue' /* webpackChunkName: "pages/tables/index" */))
const _2ebb8fc2 = () => interopDefault(import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _77b7eb14 = () => interopDefault(import('../pages/books/_id/index.vue' /* webpackChunkName: "pages/books/_id/index" */))
const _6f95960e = () => interopDefault(import('../pages/maps/_id/index.vue' /* webpackChunkName: "pages/maps/_id/index" */))
const _35739547 = () => interopDefault(import('../pages/tables/_id/index.vue' /* webpackChunkName: "pages/tables/_id/index" */))
const _1f5b3182 = () => interopDefault(import('../pages/books/_id/_chapter/index.vue' /* webpackChunkName: "pages/books/_id/_chapter/index" */))
const _d222e664 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _eea05198,
    name: "articles"
  }, {
    path: "/books",
    component: _a7d166ae,
    name: "books"
  }, {
    path: "/maps",
    component: _f2b15de4,
    name: "maps"
  }, {
    path: "/tables",
    component: _4063ef48,
    name: "tables"
  }, {
    path: "/articles/:id",
    component: _2ebb8fc2,
    name: "articles-id"
  }, {
    path: "/books/:id",
    component: _77b7eb14,
    name: "books-id"
  }, {
    path: "/maps/:id",
    component: _6f95960e,
    name: "maps-id"
  }, {
    path: "/tables/:id",
    component: _35739547,
    name: "tables-id"
  }, {
    path: "/books/:id/:chapter",
    component: _1f5b3182,
    name: "books-id-chapter"
  }, {
    path: "/",
    component: _d222e664,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
