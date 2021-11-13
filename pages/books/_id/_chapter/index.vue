<template>

	<div class="content">

		<h1>{{ title }}</h1>

        <HeadsList :id="id" :size="size" :chapterId="chapter" />

		<h3>Глава {{ chapter }} 
			<span v-if="commentShow == true" class="disable_comments" @click="disComments">&#9873;</span>
			<span v-else class="disable_comments" @click="showComments">&#9872;</span>
		</h3>

		<div class="content-text text-two-column">
			<div v-for="verse in verses" :key="verse.num" class="item">

				<p v-if="verse.sub" v-html="verse.sub" class="item_verse_sub"></p>

				<p class="item_verse">
					<span class="item_verse_num"><sup>{{ verse.num }}</sup></span>
					<span class="item_verse_text" v-html="verse.verse"></span>
				</p>

				<div v-for="comment in comments" :key="verse.index" class="item_comment">
					<details v-if="comment.index == verse.num">
						<summary v-html="comment.link" class="item_verse_link">Комментарий</summary>
						<span v-html="comment.text" class="item_verse_text"></span>
					</details>
				</div>
			</div>
		</div>

        <HeadsList :id="id" :size="size" :chapterId="chapter" />
		
	</div>

</template>

<script>

import HeadsList from '@/components/HeadsList'

export default {
	name: 'Chapter',
	head: {
		title: 'Chapter',
	},
	data(){
		return {
			id: '',
			title: '',
			chapters: [],
			chapter: '',
			verses: null,
			size: '',
			commentShow: true
		}
	},
	mounted() {

		this.getBookDetails();
		this.getChapter();
		
	},
/* 	watch: {
    	'$route' (to, from) {
			this.updatePage();
		}
    }, */
	methods: {
		getBookDetails:function () {
			fetch('/books.json')
				.then(resp => resp.json())
				.then(data => {
					this.id = data.Books[this.$route.params.id - 1].Id;
					this.title = data.Books[this.$route.params.id - 1].TitleFull;
					this.size = data.Books[this.$route.params.id - 1].Size;
				})
		},
		getChapter:function () {
			fetch('/books/' + this.$route.params.id + '/' + this.$route.params.id + '-' + this.$route.params.chapter + '.json')
				.then(resp => resp.json())
				.then(data => {

				this.id = data.book_id;
				this.chapter = data.chapter_id; 
				this.verses = data.verses;
				this.comments = data.coments;

			})
		},
		disComments: function () {
			this.commentShow = false;
			document.querySelectorAll('.item_comment').forEach((el) => {
				el.style.display = 'none';
			})
		},
		showComments: function () {
			this.commentShow = true;
			document.querySelectorAll('.item_comment').forEach((el) => {
				el.style.display = 'inherit';
			})
		}
	}
}

</script>

<style>



</style>
