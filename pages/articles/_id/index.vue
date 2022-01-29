<template>

    <div class="content" v-if="error404 == false">

        <h1>{{ title }}</h1>

        <div v-html="text" class="content-text text-two-column"></div>
        
        <div class="text-two-column">
            <ArticlesList />
		</div>

    </div>

    <div v-else>
		<Error404 />
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
                text: [],
                error404: false
            }
        },
        async fetch() {
            let id = Number(this.$route.params.id) - 1;
            const res = await fetch(process.env.baseUrl + '/articles.json')
                .then(res => res.json())
                if(res.Articles[id] != undefined) {
                    this.articleId = res.Articles[id].Id;
                    this.title = res.Articles[id].Title;
                    this.text = res.Articles[id].Text;
                } else
					this.error404 = true;
        }
    }

</script>