<template>

	<ul class="content-bible-list">
		<li v-for="article in articles">
			<nuxt-link :to="'/articles/' + article.Id" >{{ article.Title }}</nuxt-link>
		</li>
	</ul>

</template>

<script>

export default {

    data(){
        return {
            articles: []
        }
    },
    async fetch() {
        const res = await fetch(process.env.baseUrl + '/articles.json')
            .then(resp => resp.json())
            .then(data => {
                this.articles = data.Articles;
            })
    }

}

</script>

<style>
  
</style>
