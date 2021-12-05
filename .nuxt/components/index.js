export { default as ArticlesList } from '../../components/ArticlesList.vue'
export { default as Error404 } from '../../components/Error404.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HeadsList } from '../../components/HeadsList.vue'
export { default as MapsList } from '../../components/MapsList.vue'
export { default as TablesList } from '../../components/TablesList.vue'

export const LazyArticlesList = import('../../components/ArticlesList.vue' /* webpackChunkName: "components/ArticlesList" */).then(c => c.default || c)
export const LazyError404 = import('../../components/Error404.vue' /* webpackChunkName: "components/Error404" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyHeadsList = import('../../components/HeadsList.vue' /* webpackChunkName: "components/HeadsList" */).then(c => c.default || c)
export const LazyMapsList = import('../../components/MapsList.vue' /* webpackChunkName: "components/MapsList" */).then(c => c.default || c)
export const LazyTablesList = import('../../components/TablesList.vue' /* webpackChunkName: "components/TablesList" */).then(c => c.default || c)
