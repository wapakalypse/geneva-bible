<template>

	<ul class="content-bible-list">
		<li v-for="table in tables">
			<nuxt-link :to="'/tables/' + table.Id" >{{ table.Title }}</nuxt-link>
		</li>
	</ul>

</template>

<script>

    export default {
        name: 'Tables',
        data(){
            return {
                tables: []
            }
        },
        mounted() {

            this.getTables();

        },
        methods: {
            getTables:function () {

                fetch('/tables.json')
                .then(resp => resp.json())
                .then(data => {

                    this.tables = data.Tables;

                })
            }
        }

    }

</script>

<style>
  
</style>
