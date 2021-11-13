<template>

	<div class="fade content">

		<h1>{{ title }}</h1>

        <HeadsList :id="id" :size="size" :chapterId="chapter" />

		<div v-html="description" class="text-two-column content-text"></div>

        <HeadsList :id="id" :size="size" :chapterId="chapter" />
		
	</div>

</template>

<script>

export default {
	name: 'Book',
	data(){
		return {
			id: '',
			title: '',
			description: '',
			chapters: [],
			size: ''
		}
	},
	created() {
	},
	mounted() {

		this.getBookDetails();


	},
	methods: {

		getBookDetails:function () {
			fetch('/books.json')
					.then(resp => resp.json())
					.then(data => {
						this.id = data.Books[this.$route.params.id - 1].Id;
						this.title = data.Books[this.$route.params.id - 1].TitleFull;
						this.size = data.Books[this.$route.params.id - 1].Size;
						this.description = data.Books[this.$route.params.id - 1].Description;
					})
		},
		incrementIndex(index) {
			return index + 1;
		},
	}
}

</script>

<style>


</style>
