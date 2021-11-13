<template>

		<ul class="heads-list">
			<li class="heads-list_item"><b>Главы:</b></li>
			<li :class="['heads-list_item', chapterId == index ? 'current' : '']" v-for="index in size" :key="index">
				  <nuxt-link :to="'/books/' + id + '/' + index">{{ index }}</nuxt-link>
			</li>
		</ul>

</template>

<script>

export default {
  props: ['size', 'id', 'chapterId'],
}

</script>

<style>
  
</style>
