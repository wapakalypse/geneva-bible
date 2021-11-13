(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{160:function(t,n,l){"use strict";l.r(n);var e={name:"Articles",data:function(){return{title:"",articles:[]}},mounted:function(){this.getArticles()},methods:{getArticles:function(){var t=this;fetch("/articles.json").then((function(t){return t.json()})).then((function(data){t.articles=data.Articles}))}}},o=l(9),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("ul",{staticClass:"content-bible-list"},t._l(t.articles,(function(article){return l("li",[l("nuxt-link",{attrs:{to:"/articles/"+article.Id}},[t._v(t._s(article.Title))])],1)})),0)}),[],!1,null,null,null);n.default=component.exports},161:function(t,n,l){"use strict";l.r(n);var e={data:function(){return{maps:[]}},mounted:function(){this.getMaps()},methods:{getMaps:function(){var t=this;fetch("/maps.json").then((function(t){return t.json()})).then((function(data){t.maps=data.Maps}))}}},o=l(9),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("ul",{staticClass:"content-bible-list"},t._l(t.maps,(function(map){return l("li",[l("nuxt-link",{attrs:{to:"/maps/"+map.Id}},[t._v(t._s(map.Title))])],1)})),0)}),[],!1,null,null,null);n.default=component.exports},162:function(t,n,l){"use strict";l.r(n);var e={name:"Tables",data:function(){return{tables:[]}},mounted:function(){this.getTables()},methods:{getTables:function(){var t=this;fetch("/tables.json").then((function(t){return t.json()})).then((function(data){t.tables=data.Tables}))}}},o=l(9),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("ul",{staticClass:"content-bible-list"},t._l(t.tables,(function(table){return l("li",[l("nuxt-link",{attrs:{to:"/tables/"+table.Id}},[t._v(t._s(table.Title))])],1)})),0)}),[],!1,null,null,null);n.default=component.exports},173:function(t,n,l){"use strict";l.r(n);var e={name:"Main",data:function(){return{title:"",list:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;fetch("/books.json").then((function(t){return t.json()})).then((function(data){t.list=data.Books}))}}},o=l(9),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"content"},[l("h1",{staticClass:"main-heads"},[t._v("Женевская Библия")]),t._v(" "),l("div",{staticClass:"content-bible"},[l("div",{staticClass:"content-bible-col"},[l("ul",{staticClass:"content-bible-list"},[l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/1"}},[t._v("Введение")])],1),t._v(" "),l("h3",[t._v("Ветхий завет")]),t._v(" "),l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/2"}},[t._v("Предисловие")])],1),t._v(" "),l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/3"}},[t._v("Введение в Пятикнижие")])],1),t._v(" "),t._l(t.list.slice(0,5),(function(n,e){return l("li",{key:n.id},[l("nuxt-link",{attrs:{to:"/books/"+n.Id}},[t._v(t._s(n.Title))])],1)}))],2),t._v(" "),l("ul",{staticClass:"content-bible-list"},[l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/4"}},[t._v("Введение к историческим книгам")])],1),t._v(" "),t._l(t.list.slice(5,18),(function(n,e){return l("li",{key:n.id},[l("nuxt-link",{attrs:{to:"/books/"+n.Id}},[t._v(t._s(n.Title))])],1)}))],2),t._v(" "),l("ul",{staticClass:"content-bible-list"},[l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/5"}},[t._v("Введение к поэтическим книгам")])],1),t._v(" "),t._l(t.list.slice(18,19),(function(n,e){return l("li",{key:n.id},[l("nuxt-link",{attrs:{to:"/books/"+n.Id}},[t._v(t._s(n.Title))])],1)}))],2),t._v(" "),l("ul",{staticClass:"content-bible-list"},[l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/6"}},[t._v("Введение к книгам мудрости")])],1),t._v(" "),t._l(t.list.slice(19,22),(function(n,e){return l("li",{key:n.id},[l("nuxt-link",{attrs:{to:"/books/"+n.Id}},[t._v(t._s(n.Title))])],1)}))],2),t._v(" "),l("ul",{staticClass:"content-bible-list"},[l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/7"}},[t._v("Введение к книгам пророков")])],1),t._v(" "),t._l(t.list.slice(22,39),(function(n,e){return l("li",{key:n.id},[l("nuxt-link",{attrs:{to:"/books/"+n.Id}},[t._v(t._s(n.Title))])],1)}))],2)]),t._v(" "),l("div",{staticClass:"content-bible-col"},[l("ul",{staticClass:"content-bible-list"},[l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/8"}},[t._v("На грани двух заветов")])],1),t._v(" "),l("h3",[t._v("Новый завет")]),t._v(" "),l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/9"}},[t._v("Введение к Евангелиям и Деяниям апостолов")])],1),t._v(" "),t._l(t.list.slice(39,44),(function(n,e){return l("li",{key:n.id},[l("nuxt-link",{attrs:{to:"/books/"+n.Id}},[t._v(t._s(n.Title))])],1)}))],2),t._v(" "),l("ul",{staticClass:"content-bible-list"},[l("li",{staticClass:"not-book"},[l("nuxt-link",{attrs:{to:"/articles/10"}},[t._v("Введение к посланиям")])],1),t._v(" "),t._l(t.list.slice(44,66),(function(n,e){return l("li",{key:n.id},[l("nuxt-link",{attrs:{to:"/books/"+n.Id}},[t._v(t._s(n.Title))])],1)}))],2)])]),t._v(" "),l("h2",{staticClass:"main-sub-heads"},[t._v("Статьи")]),t._v(" "),l("div",{staticClass:"content-bible"},[l("div",{staticClass:"text-two-column"},[l("ArticlesList")],1)]),t._v(" "),l("div",{staticClass:"content-bible"},[l("div",{staticClass:"content-bible-col"},[l("h2",{staticClass:"main-sub-heads"},[t._v("Карты")]),t._v(" "),l("MapsList")],1),t._v(" "),l("div",{staticClass:"content-bible-col"},[l("h2",{staticClass:"main-sub-heads"},[t._v("Таблицы")]),t._v(" "),l("TablesList")],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ArticlesList:l(160).default,MapsList:l(161).default,TablesList:l(162).default})}}]);