<template>

    <div class="content">

        <h1>{{ title }}</h1>

        <div v-html="text" class="content-text text-two-column"></div>

        <img style="width: 100%;" :src="'/maps/m' + $route.params.id + '.png'" />
        
	    <div class="text-two-column">
            <MapsList />
        </div>

    </div>

</template>

<script>

    export default {
        name: 'Map',
        data(){
            return {
                id: Number(this.$route.params.id) - 1,
                title: '',
                text: []
            }
        },
        mounted() {

            this.getMap();

        },
        methods: {
            getMap:function () {

			    fetch('/maps.json')
				.then(resp => resp.json())
				.then(data => {
                    this.title = data.Maps[this.id].Title;
                    this.text = data.Maps[this.id].Text;
			    })
		    }       
        }
    }

</script>

<style>



</style>
