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
    async fetch() {
		const res = await fetch(process.env.baseUrl + '/maps.json')
			.then(resp => resp.json())
			.then(data => {
				this.maps = data.Maps;
			})
	}

}

</script>

<style>
  
</style>
