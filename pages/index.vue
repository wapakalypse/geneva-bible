<template>

    <div class="content">

        <h1 class="main-heads">Женевская Библия</h1>

        <div class="content-bible">
            <div class="content-bible-col">
                <ul class="content-bible-list">
                    <li class="not-book"><nuxt-link to="/articles/1">Введение</nuxt-link></li>
                    <h3>Ветхий завет</h3>
                    <li class="not-book"><nuxt-link to="/articles/2">Предисловие</nuxt-link></li>
                    <li class="not-book"><nuxt-link to="/articles/3">Введение в Пятикнижие</nuxt-link></li>
                    <li v-for="(item, index) in list.slice(0,5)" :key="item.id">
                        <nuxt-link :to="'/books/' + item.Id">{{item.Title}}</nuxt-link>
                    </li>
                </ul>
                <ul class="content-bible-list">
                    <li class="not-book"><nuxt-link to="/articles/4">Введение к историческим книгам</nuxt-link></li>
                    <li v-for="(item, index) in list.slice(5,18)" :key="item.id">
                        <nuxt-link :to="'/books/' + item.Id">{{item.Title}}</nuxt-link>
                    </li>
                </ul>
                <ul class="content-bible-list">
                    <li class="not-book"><nuxt-link to="/articles/5">Введение к поэтическим книгам</nuxt-link></li>
                    <li v-for="(item, index) in list.slice(18,19)" :key="item.id">
                        <nuxt-link :to="'/books/' + item.Id">{{item.Title}}</nuxt-link>
                    </li>
                </ul>
                <ul class="content-bible-list">
                    <li class="not-book"><nuxt-link to="/articles/6">Введение к книгам мудрости</nuxt-link></li>
                    <li v-for="(item, index) in list.slice(19,22)" :key="item.id">
                        <nuxt-link :to="'/books/' + item.Id">{{item.Title}}</nuxt-link>
                    </li>
                </ul>
                <ul class="content-bible-list">
                    <li class="not-book"><nuxt-link to="/articles/7">Введение к книгам пророков</nuxt-link></li>
                    <li v-for="(item, index) in list.slice(22,39)" :key="item.id">
                        <nuxt-link :to="'/books/' + item.Id">{{item.Title}}</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="content-bible-col">
                <ul class="content-bible-list">
                    <li class="not-book"><nuxt-link to="/articles/8">На грани двух заветов</nuxt-link></li>
                    <h3>Новый завет</h3>
                    <li class="not-book"><nuxt-link to="/articles/9">Введение к Евангелиям и Деяниям апостолов</nuxt-link></li>                    
                    <li v-for="(item, index) in list.slice(39,44)" :key="item.id">
                        <nuxt-link :to="'/books/' + item.Id">{{item.Title}}</nuxt-link>
                    </li>
                </ul>
                <ul class="content-bible-list">
                    <li class="not-book"><nuxt-link to="/articles/10">Введение к посланиям</nuxt-link></li>
                    <li v-for="(item, index) in list.slice(44,66)" :key="item.id">
                        <nuxt-link :to="'/books/' + item.Id">{{item.Title}}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

        <h2 class="main-sub-heads">Статьи</h2>

        <div class="content-bible">
            

            <div class="text-two-column">
                <ArticlesList />
            </div>

        </div> 

        <div class="content-bible">
            <div class="content-bible-col">
                <h2 class="main-sub-heads">Карты</h2>
                <MapsList />
            </div>
            <div class="content-bible-col">
                <h2 class="main-sub-heads">Таблицы</h2>
                <TablesList />
            </div>
        </div>
        
    </div>

</template>

<script>

    export default {
        name: 'Main',
        head() {
            return {
                title: 'Женевская Библия онлайн c комментариями. Новый Завет, Ветхий Завет. Статьи, карты, таблицы.',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Новая Женевская Библия для чтения онлайн c комментариями. Новый Завет, Ветхий Завет. Статьи, карты, таблицы. Geneva Bible.'}],
            }
        },
        data(){
            return {
                title: '',
                list: []
            }
        },
        async fetch() {
            let id = Number(this.$route.params.id) - 1;
            const res = await fetch(process.env.baseUrl + '/books.json')
                .then(res => res.json())
                    this.list = res.Books;
        }
    }

</script>

<style>



</style>
