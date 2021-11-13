<template>

    <div class="content">

        <h1>{{ title }}</h1>

        <div v-html="text" class="content-text text-two-column"></div>
        
        <div class="text-two-column">
            <ArticlesList />
		</div>

    </div>

</template>

<script>

    export default {
        name: 'Article',
        data(){
            return {
                id: Number(this.$route.params.id) - 1,
                title: '',
                text: []
            }
        },
        mounted() {

            this.getArticle();


        },
        methods: {
            getArticle:function () {

			    fetch('/articles.json')
				.then(resp => resp.json())
				.then(data => {
                    this.title = data.Articles[this.id].Title; 
                    this.text = data.Articles[this.id].Text;
			    })
		    }
        }
    }

</script>

<style>



</style>
