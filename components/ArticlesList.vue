<template>

	<ul class="content-bible-list">
		<li v-for="article in articles">
			<nuxt-link :to="'/articles/' + article.Id" >{{ article.Title }}</nuxt-link>
		</li>
	</ul>

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
