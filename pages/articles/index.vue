<template>

    <div class="content">

        <h1>Статьи</h1>

		<div class="text-two-column">
            <ArticlesList />
		</div>
        
    </div>

</template>

<script>

    export default {
        name: 'Articles',
        data(){
            return {
                title: '',
                articles: []
            }
        },
        created() {
        },
        mounted() {

            this.getArticles();

        },
        methods: {
            getArticles:function () {

                fetch('/articles.json')
                .then(resp => resp.json())
                .then(data => {

                    this.articles = data.Articles;

                })
            }
        }

    }

</script>

<style>



</style>
