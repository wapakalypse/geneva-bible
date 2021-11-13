import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02608d8d = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _3c464620 = () => interopDefault(import('../pages/books/index.vue' /* webpackChunkName: "pages/books/index" */))
const _675b1be7 = () => interopDefault(import('../pages/maps/index.vue' /* webpackChunkName: "pages/maps/index" */))
const _62ba80f5 = () => interopDefault(import('../pages/tables/index.vue' /* webpackChunkName: "pages/tables/index" */))
const _13ee19f8 = () => interopDefault(import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _341dffdb = () => interopDefault(import('../pages/books/_id/index.vue' /* webpackChunkName: "pages/books/_id/index" */))
const _41e5eb52 = () => interopDefault(import('../pages/maps/_id/index.vue' /* webpackChunkName: "pages/maps/_id/index" */))
const _05d01960 = () => interopDefault(import('../pages/tables/_id/index.vue' /* webpackChunkName: "pages/tables/_id/index" */))
const _6899c258 = () => interopDefault(import('../pages/books/_id/_chapter/index.vue' /* webpackChunkName: "pages/books/_id/_chapter/index" */))
const _331b9e55 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _02608d8d,
    name: "articles"
  }, {
    path: "/books",
    component: _3c464620,
    name: "books"
  }, {
    path: "/maps",
    component: _675b1be7,
    name: "maps"
  }, {
    path: "/tables",
    component: _62ba80f5,
    name: "tables"
  }, {
    path: "/articles/:id",
    component: _13ee19f8,
    name: "articles-id"
  }, {
    path: "/books/:id",
    component: _341dffdb,
    name: "books-id"
  }, {
    path: "/maps/:id",
    component: _41e5eb52,
    name: "maps-id"
  }, {
    path: "/tables/:id",
    component: _05d01960,
    name: "tables-id"
  }, {
    path: "/books/:id/:chapter",
    component: _6899c258,
    name: "books-id-chapter"
  }, {
    path: "/",
    component: _331b9e55,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
