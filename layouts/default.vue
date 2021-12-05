<template>

    <div id="app">

        <Header />

        <transition name="fade">
             <router-view :key="$route.path"> <Nuxt /> </router-view>
        </transition>

		<Footer />

    </div>

</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        Header, 
        Footer
    },
    head: {
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    link: [
    //    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
    //    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap' }        
      ]
    },

}

</script>

<style>

@font-face {
	font-family:'Inter-Regular';
	src: url('/fonts/Inter-Regular.otf');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

@font-face {
    font-family: 'Inter-Medium';
	src: url('/fonts/Inter-Medium.otf');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

* {
    margin: 0;
    border: 0;
    padding: 0;
}

body {
	font-family:'Inter-Regular';
    font-size: 12pt;
}

a,
a:visited {
    color: #005ed2;
    text-decoration: none;
}
a:hover {
	color: #b1ab00;
    transition: .3s;
}
h1 {
    margin: 3rem auto;
    font-family: 'Inter-Medium';
    font-size: 28pt;
    font-weight: 500;
}

h2 {
    margin: .7rem 0;
    font-family: 'Inter-Medium';
    font-size: 18pt;
    font-weight: 500;
}

h3 {
    margin: 2.5rem .5rem;
    font-family: 'Inter-Medium';
    font-size: 16pt;
    font-weight: 500;
}

p {
    text-align: justify;
    line-height: 1.3;
}

hr {
    border-bottom: 1px solid #717171;
}

#app {
    background: #eef2fb;
}

.header {
    display: flex;
    align-items: center;
    background: linear-gradient(to top, #4c4c4c, #1d1d1d);
    padding: .7rem 3rem;
    box-sizing: border-box;
}

.header a,
.header a:visited {
	color: #fbfbfb;
}
.header a:hover {
	color: #dcd717;
    transition: .3s;
}

.header-cross {
	color: #dcd717;
	font-size: 20pt;
	margin: 0 .3rem
}

.header.header-mobile {
    margin-top: 0;
    transition: .5s;
}
.nav-menu-show {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #000;
    font-size: 24pt;
}

.nav-menu-close {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    font-size: 24pt;
}

.header-menu {
    display: flex;
    list-style-type: none;
}

.header-menu li {
	margin: 0 1rem;
}

.header-search {
    margin-left: auto;
}

.header-search-input {
    padding: .3rem;
    border-radius: 3px;
}

.header-search-input-numbers {
    width: 55px;
}

.header-verse {
    width: 242px;
    position: absolute;
    top: 3rem;
    right: 3rem;
    padding: 0.3rem 1rem;
    border-radius: 3px;
    background: aliceblue;
    font-size: 11pt;
}

.fade-verse-enter-active, .fade-verse-leave-active {
  transition: opacity .5s;
}
.fade-verse-enter, .fade-verse-leave-to {
  opacity: 0;
}

.heads-list {
	display: flex;
	flex-wrap: wrap;
	padding: .7rem 0;
/*  background: #ececec; */
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	list-style-type: none;
}

.main-sub-heads {
	margin: 2rem .5rem 0;
    padding: 1rem .5rem;
    border-radius: 3px;
    background: #f0f6ff;
}

.heads-list_item {
	margin: .5rem;
    color: #333;
}

.current {
	font-weight: 600;
	border-bottom: 2px solid #4793e2;
}

.content {
    width: 800px;
    margin: 3rem auto;
    padding: 3rem;
    background: #fbfbfb;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 1px 1px 4px 1px #b1b1b1;
}

.content-bible {
    display: flex;
    justify-content: space-around;
}

.content-bible-col {
    width: 50%;
    flex-direction: column;
    margin: 0 .5rem;
}

.content-bible-list {
    margin: 0 .5rem;
    font-size: 13pt;
    list-style-type: none;
}

.content-bible-list li {
    margin: .3rem 0;
    padding: .5rem;
    border-bottom: 1px solid #e5e5e5;
}

.content-bible-list li:last-child {
    border-bottom: 0;
}

.not-book {
    background: #ecf0fb;
    border-radius: 3px;
    border: 1px solid #e5e5e5;
}

.not-book a {
    color: #272727;
}

.not-book a:hover {
	color: #dcd717;
    transition: .3s;
}

.img-responsive,
.content-image {
    width: 100%;
}

.content-text p {
    margin: 0 0 1rem;
}

.content-text ul {
    margin: 0 0 1.2rem 1.5rem;
}

.content-text ul li {
    line-height: 14pt;
}

.text-two-column {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
    column-gap: 2rem;
    margin: 2rem .5rem;
}

.item {
    margin: 0 0 1rem;
}

.item_verse_num {
    color: #665;
}

.content-text p.item_verse_sub {
    margin: 0 0 1rem;
    padding: 1rem;
    font-weight: 600;
    border-left: 2px solid #989898;
    background: #f5f5f5;
}

.item_comment details {
    border-radius: 5px;
    font-size: 11pt;
    background: #f7faff;
    color: #555;
    cursor: pointer;
}

.item_comment details summary {
    padding: .5rem 1rem;
    border: 1px solid #f9f9fb;
    border-radius: 5px;
    background: #f2f6ff;
}

.item_comment details span {
    display: block;
    padding: .5rem 1rem;
    color: #333;
}

.text-non-align {
    text-align: initial;
}

details[open] span {
  animation: spoiler .5s;
}

@keyframes spoiler {
  0%   {opacity: 0;}
  100% {opacity: 1;}
}

.disable_comments {
    float: right;
    color: #666666;
    cursor: pointer;
}

.fade-enter-active {
    transition: .3s;
}

.fade-leave-active {
    transition: .3s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}


@media screen and (max-width: 800px){	
    .header, 
    .header-menu {
        flex-direction: column;
        text-align: center;
    }
    .header-search {
        margin: auto;
    }
    .header-menu li {
        margin: .5rem;
    }
    .header-verse {
        top: 19%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }
    .content {
        width: 98%;
    }
}

@media screen and (max-width: 700px){	
    .text-two-column {
        column-count: 1;
    }
}

@media screen and (max-width: 600px){	
    .header {
        width: 100%;
        padding: .5rem;
        margin-top: -270px;
        overflow: hidden;
        transition: .5s;
    }
    .nav-menu-show {
        display: block;
    }
    .content {
        padding: 1rem;
    }
    .content-bible {
        flex-direction: column;
    }
    .content-bible-col {
        width: 98%;
    }
}

@media screen and (max-width: 500px){	
    body {
        font-size: 10pt;
    }
    h1 {
        font-size: 20pt;
    }   
    h2 {
        font-size: 16pt;
    }
    h3 {
        font-size: 14pt;
    }
    .content-bible-list {
        font-size: 11pt;
    }
    .item_comment details {
        font-size: 9pt;
    }
}
</style>
