<template>

    <header class="header" @click="closeVerse">

        <span class="header-cross"> ✟ </span>
        <ul class="header-menu">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="/books">Книги</nuxt-link></li>
            <li><nuxt-link to="/articles">Статьи</nuxt-link></li>            
            <li><nuxt-link to="/tables">Таблицы</nuxt-link></li>
            <li><nuxt-link to="/maps">Карты</nuxt-link></li>
        </ul>

        <div class="header-search">
            <span class="header-search-books">
                <select class="header-search-input" 
                        type="text" 
                        v-model="search_books"
                        @change="updateChaptersList">
                    <option v-for="item in books_list" 
                            :key="item.Id" 
                            :value="item.Id">
                            {{ item.Title }}
                    </option>
                </select>
            </span>
            <transition name="fade-verse">
                <span v-if="search_books != ''" class="header-search-chapters">           
                    <select class="header-search-input header-search-input-numbers" 
                            type="text" 
                            v-model="search_chapters"
                            @change="updateVersesList">
                        <option v-for="chapter_numbers in chapters_list" 
                                :value="chapter_numbers">
                            {{ chapter_numbers }}
                        </option>
                    </select>
                </span>
            </transition>
            <transition name="fade-verse">
                <span v-if="search_chapters != ''" class="header-search-verses"> 
                    <select class="header-search-input header-search-input-numbers" 
                            type="text" 
                            v-model="search_verses"
                            @change="getVerse">
                        <option v-for="verse_numbers in verses_list" :value="verse_numbers">
                            {{ verse_numbers }}
                        </option>
                    </select>
                </span>
            </transition>
            <transition name="fade-verse">
                <span v-if="verse != ''" class="header-verse" v-html="verse"></span>
            </transition>
        </div>

        <div class="nav-menu-show" @click="showMenu">☰</div>
        <div class="nav-menu-close" @click="showMenu">✖</div>

    </header>

</template>

<script>

    export default {
        name: 'Main',
        data(){
            return {
                title: '',
                books_list: [],
                chapters_list: [],
                verses_list: [],
                search_books: '',
                search_chapters: '',
                search_verses: '',
                verse: '',
                nav: false
            }
        },
        mounted() {
            this.getBooks();
        },
        methods: {
            getBooks:function () {

                fetch('/books.json')
                    .then(resp => resp.json())
                    .then(data => {

                    this.books_list = data.Books;

                })
            },
            updateChaptersList: function () {

                this.chapters_list = this.books_list[ this.search_books -1 ].Size;

            },
            updateVersesList:function () {
                
                fetch('/books/' + this.search_books + '/' + this.search_books + '-' + this.search_chapters + '.json')
                    .then(resp => resp.json())
                    .then(data => {

                    this.verses_list = data.verses.length;

                })

            },
            getVerse:function () {
                
                fetch('/books/' + this.search_books + '/' + this.search_books + '-' + this.search_chapters + '.json')
                    .then(resp => resp.json())
                    .then(data => {

                    this.verse = data.verses[ this.search_verses - 1 ].verse;           

                })

                let body = document.querySelector('body');
                body.onclick = this.closeVerse;
            },
            closeVerse:function () {

                if(this.verse != '') {
                    this.verse = '';
                }

            },
            showMenu:function () {
                
                let menu = document.querySelector('.header'),
                    show = document.querySelector('.nav-menu-show'),
                    close = document.querySelector('.nav-menu-close');

                if(this.nav == false) {
                    menu.classList.add('header-mobile');
                    show.style.display = 'none';
                    close.style.display = 'block';
                    this.nav = true;
                } else {
                    menu.classList.remove('header-mobile');
                    show.style.display = 'block';
                    close.style.display = 'none';
                    this.nav = false;                  
                }


            
            },
        }

    }

</script>

<style>

</style>
