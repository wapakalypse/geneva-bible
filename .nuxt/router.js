import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e14be64a = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _71be5062 = () => interopDefault(import('../pages/books/index.vue' /* webpackChunkName: "pages/books/index" */))
const _00a47235 = () => interopDefault(import('../pages/maps/index.vue' /* webpackChunkName: "pages/maps/index" */))
const _61f1087a = () => interopDefault(import('../pages/tables/index.vue' /* webpackChunkName: "pages/tables/index" */))
const _7e5b4246 = () => interopDefault(import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _46546a4d = () => interopDefault(import('../pages/books/_id/index.vue' /* webpackChunkName: "pages/books/_id/index" */))
const _62412ac0 = () => interopDefault(import('../pages/maps/_id/index.vue' /* webpackChunkName: "pages/maps/_id/index" */))
const _3a66fd2e = () => interopDefault(import('../pages/tables/_id/index.vue' /* webpackChunkName: "pages/tables/_id/index" */))
const _b6a20fb4 = () => interopDefault(import('../pages/books/_id/_chapter/index.vue' /* webpackChunkName: "pages/books/_id/_chapter/index" */))
const _4fa5e172 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e14be64a,
    name: "articles"
  }, {
    path: "/books",
    component: _71be5062,
    name: "books"
  }, {
    path: "/maps",
    component: _00a47235,
    name: "maps"
  }, {
    path: "/tables",
    component: _61f1087a,
    name: "tables"
  }, {
    path: "/articles/:id",
    component: _7e5b4246,
    name: "articles-id"
  }, {
    path: "/books/:id",
    component: _46546a4d,
    name: "books-id"
  }, {
    path: "/maps/:id",
    component: _62412ac0,
    name: "maps-id"
  }, {
    path: "/tables/:id",
    component: _3a66fd2e,
    name: "tables-id"
  }, {
    path: "/books/:id/:chapter",
    component: _b6a20fb4,
    name: "books-id-chapter"
  }, {
    path: "/",
    component: _4fa5e172,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
