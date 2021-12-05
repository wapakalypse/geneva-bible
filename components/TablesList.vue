<template>

	<ul class="content-bible-list">
		<li v-for="table in tables">
			<nuxt-link :to="'/tables/' + table.Id" >{{ table.Title }}</nuxt-link>
		</li>
	</ul>

</template>

<script>

export default {

	data(){
		return {
			tables: []
		}
	},
    async fetch() {
        const res = await fetch(process.env.baseUrl + '/tables.json')
            .then(resp => resp.json())
            .then(data => {
                this.tables = data.Tables;
            })
    }
    
}

</script>

<style>
  
</style>
