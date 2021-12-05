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
        head() {
            return {
                title: 'Статья "' + this.title + '". Женевская Библия онлайн с комментариями',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Новая Женевская Библия онлайн. Статья "' + this.title + '". Читать...'}],
            }
        },
        data(){
            return {
                articleId: null,
                title: '',
                text: []
            }
        },
        async fetch() {
            let id = Number(this.$route.params.id) - 1;
            const res = await fetch(process.env.baseUrl + '/articles.json')
                .then(res => res.json())
                    this.articleId = res.Articles[id].Id;
                    this.title = res.Articles[id].Title;
                    this.text = res.Articles[id].Text;
        }
    }

</script>

<style>



</style>
