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
        name: 'Main',
        data(){
            return {
                title: '',
                list: []
            }
        },
        created() {
        },
        mounted() {

            this.getList();

        },
        methods: {
            getList:function () {

                fetch('/books.json')
                    .then(resp => resp.json())
                    .then(data => {

                    this.list = data.Books;

                })
            }
        }

    }

</script>

<style>



</style>
