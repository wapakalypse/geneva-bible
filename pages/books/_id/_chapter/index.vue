<template>

	<div class="content" v-if="error404 == false">

		<h1>{{ title }}</h1>

        <HeadsList :id="id" :size="size" :chapterId="chapter" />

		<h3>Глава {{ chapter }} 
			<span v-if="commentShow == true" title="Скрыть комментарии" class="disable_comments" @click="disComments">&#9873;</span>
			<span v-else title="Показать комментарии" class="disable_comments" @click="showComments">&#9872;</span>
		</h3>

		<div class="content-text text-two-column">
			<div v-for="verse in verses" :key="verse.num" class="item">

				<p v-show="verse.sub" v-html="verse.sub" class="item_verse_sub"></p>

				<p class="item_verse">
					<span class="item_verse_num"><sup>{{ verse.num }}</sup></span>
					<span class="item_verse_text" v-html="verse.verse"></span>
				</p>

				<div v-for="comment in comments" :key="verse.index" class="item_comment">
					<details v-show="comment.index == verse.num">
						<summary v-html="comment.link" class="item_verse_link">Комментарий</summary>
						<span v-html="comment.text" class="item_verse_text"></span>
					</details>
				</div>

				<div v-for="link in links" :key="verse.index" class="item_link">
					<div v-show="link.verse_id == verse.num">
						<span v-html="link.spans" class="item_link_content" @click="getVerseLink"></span>
					</div>
				</div>

			</div>
		</div>

        <HeadsList :id="id" :size="size" :chapterId="chapter" />

	</div>

	<div v-else>
		<Error404 />
	</div>

</template>

<script>

	export default {
		name: 'Chapter',
		head() {
			return {
				title: this.title + ', глава ' + this.chapter + ' - Женевская Библия онлайн',
				meta: [{ 
					hid: 'description', 
					name: 'description', 
					content: 'Женевская Библия онлайн. ' + this.title + ', глава ' + this.chapter + '. Читать с комментариями...'}],
			}
		},
		data(){
			return {
				id: '',
				title: '',
				chapters: [],
				chapter: '',
				verses: null,
				size: '',
				comments: [],
				commentShow: true,
				links: '',
				error404: false
			}
		},
		async fetch() {
			const res = await fetch(process.env.baseUrl + '/books.json')
				.then(res => res.json())
					if(res.Books[this.$route.params.id - 1] != undefined) {
						this.title = res.Books[this.$route.params.id - 1].TitleFull;
						this.size = res.Books[this.$route.params.id - 1].Size;
					} else
						this.error404 = true;

			const res2 = await fetch(process.env.baseUrl + '/books/' + this.$route.params.id + '/' + this.$route.params.id + '-' + this.$route.params.chapter + '.json')
				.then(res2 => res2.json())
					this.id = res2.book_id;
					this.chapter = res2.chapter_id; 
					this.verses = res2.verses;
					this.comments = res2.coments;

				if(this.id == null)
					this.error404 = true;

			const res3 = await fetch(process.env.baseUrl + '/links/' + this.$route.params.id + '/' + this.$route.params.id + '-' + this.$route.params.chapter + '.json')
				.then(res3 => res3.json())

				const array = ['','Быт','Исх','Лев','Чис','Втор','Нав','Суд','Руфь','1Цар','2Цар','3Цар','2Цар','1Пар','2Пар','Езд','Неем','Есф','Иов','Пс','Прит','Еккл','Песн','Иса','Иер','Плач','Иез','Дан','Ос','Иоил','Ам','Авд','Ион','Мих','Наум','Авв','Соф','Агг','Зах','Мал','Мф','Мк','Лк','Ин','Деян','Иак','1Петр','2Петр','1Ин','2Ин','3Ин','Иуд','Рим','1Кор','2Кор','Гал','Еф','Фил','Кол','1Фес','2Фес','1Тим','2Тим','Тит','Флм','Евр','Откр'];

				res3.links.forEach((el) => {
					let arr = el.content.split('; ');
					let book, bookName, chap, vers;
					el.spans = '';
					arr.forEach((item) => {

						bookName = item.split(' ')[0];
						book = (array.indexOf(bookName) != -1) ? array.indexOf(bookName) : book;
						chap = item.split(':')[0];
						chap = chap.substr(chap.lastIndexOf(' ')+1);
						vers = item.split(':')[1];

						if(!vers.includes(',')) {
							item = '<span class="item_link_content_el" data-book="'+book+'" data-chap="'+chap+'" data-vers="'+vers+'">'+item+'</span>';
						}
						else {
							let vers1 = vers.split(',')[0],
								vers2 = vers.split(', ')[1];
							item = '<span class="item_link_content_el" data-book="'+book+'" data-chap="'+chap+'" data-vers="'+vers1+'">'+bookName+' '+chap+':'+vers1+'</span><span class="item_link_content_el" data-book="'+book+'" data-chap="'+chap+'" data-vers="'+vers2+'">'+vers2+'</span>';
						}
						el.spans += item;
					})
				})

				this.links = res3.links;

		},
		mounted() {
		//	this.getLinks();
		},
	/* 	watch: {
			'$route' (to, from) {
				this.updatePage();
			}
		}, */
		methods: {
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
			},
			getVerseLink: function (e) {
				fetch('/books/' + e.target.dataset.book + '/' + e.target.dataset.book + '-' + e.target.dataset.chap + '.json')
                    .then(resp => resp.json())
                    .then(data => {

                    alert(data.verses[ e.target.dataset.vers - 1].verse);           

                })
			}				
		}
	}

</script>

<style>



</style>
