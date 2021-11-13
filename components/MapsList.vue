<template>

	<ul class="content-bible-list">
		<li v-for="map in maps">
			<nuxt-link :to="'/maps/' + map.Id" >{{ map.Title }}</nuxt-link>
		</li>
	</ul>

</template>

<script>

export default {
	data(){
		return {
			maps: []
		}
	},
	mounted() {

		this.getMaps();

	},
	methods: {
		getMaps:function () {

			fetch('/maps.json')
			.then(resp => resp.json())
			.then(data => {

				this.maps = data.Maps;
				
			})
		}
	}
}

</script>

<style>
  
</style>
