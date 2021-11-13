<template>

    <div class="content">

        <h1>{{ title }}</h1>

        <div v-html="text" class="content-text text-two-column"></div>

        <img style="width: 100%;" :src="'/tables/t' + $route.params.id + '.png'" />

        <div class="text-two-column">
            <TablesList />
        </div>
        
    </div>

</template>

<script>

    export default {
        name: 'Table',
        data(){
            return {
                id: Number(this.$route.params.id) - 1,
                title: '',
                text: []
            }
        },
        mounted() {

            this.getTable();

        },
        methods: {
            getTable:function () {

			    fetch('/tables.json')
				.then(resp => resp.json())
				.then(data => {
                    this.title = data.Tables[this.id].Title;
                    this.text = data.Tables[this.id].Text;
                    console.log(this.title);
			    })

		    }
        }
    }

</script>

<style>


</style>
