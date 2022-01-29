<template>

	<div class="content" v-if="error404 == false">

		<h1>{{ title }}</h1>

        <HeadsList :id="id" :size="size" :chapterId="chapter" />

		<div v-html="description" class="content-text text-two-column"></div>

		<h2>&nbsp;Содержание</h2>

		<div v-html="head" class="content-head"></div>

        <HeadsList :id="id" :size="size" :chapterId="chapter" />
		
	</div>

	<div v-else>
		<Error404 />
	</div>

</template>

<script>

	export default {
		name: 'Book',
		head() {
			return {
				title: this.title + '. Женевская Библия онлайн с комментариями',
				meta: [{ 
					hid: 'description', 
					name: 'description', 
					content: 'Новая Женевская Библия онлайн. ' + this.title + '. Автор, время и обстоятельства написания, трудности истолкования, характерные особенности и темы. Читать с комментариями...'}],
			}
		},
		data(){
			return {
				id: '',
				title: '',
				description: '',
				chapter: '',	
				chapters: [],
				size: '',
				head: '',
				error404: false
			}
		},
        async fetch() {
            const res = await fetch(process.env.baseUrl + '/books.json')
                .then(res => res.json())
					if(res.Books[this.$route.params.id - 1] != undefined) {
						this.id = res.Books[this.$route.params.id - 1].Id;
						this.title = res.Books[this.$route.params.id - 1].TitleFull;
						this.size = res.Books[this.$route.params.id - 1].Size;
						this.description = res.Books[this.$route.params.id - 1].Description;
						this.head = res.Books[this.$route.params.id - 1].Head;	
					} else
						this.error404 = true;
        }
	}

</script>