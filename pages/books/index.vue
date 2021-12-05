<template>

    <div class="content">

        <h1>Список книг Библии</h1>

        <div class="content-bible">
            <div class="content-bible-col">
                <h2>Ветхий завет</h2>
                <ul class="content-bible-list">
                    <li v-for="(item, index) in list.slice(0,39)" :key="item.id">
                        <nuxt-link :to="'/books/' + item.Id">{{item.Title}}</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="content-bible-col">
                <h2>Новый завет</h2>
                <ul class="content-bible-list">
                    <li v-for="(item, index) in list.slice(39,66)" :key="item.id">
                        <nuxt-link :to="'/books/' + item.Id">{{item.Title}}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>

</template>

<script>

    export default {
        name: 'Books',
        head() {
            return {
                title: 'Список книг Женевской Библии онлайн.',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Полный список библейских апокрифических книг Женевской Библии онлайн. Новая Женевская Библия c комментариями для чтения онлайн.'}],
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
