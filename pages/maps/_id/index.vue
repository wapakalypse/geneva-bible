<template>

    <div class="content" v-if="error404 == false">

        <h1>{{ title }}</h1>

        <div v-html="text" class="content-text text-two-column"></div>

        <img class="content-image" :src="'/maps/m' + $route.params.id + '.png'" />
        
	    <div class="text-two-column">
            <MapsList />
        </div>

    </div>

    <div v-else>
		<Error404 />
	</div>

</template>

<script>

    export default {
        name: 'Map',
        head() {
            return {
                title: 'Карта "' + this.title + '". Женевская Библия онлайн с комментариями',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Новая Женевская Библия онлайн. Карта "' + this.title + '". Комментарий к карте...'}],
            }
        },
        data(){
            return {
                mapId: null,
                title: '',
                text: [],
                error404: false
            }
        },
        async fetch() {
            let id = Number(this.$route.params.id) - 1;
            const res = await fetch(process.env.baseUrl + '/maps.json')
                .then(res => res.json())
                if(res.Maps[id] != undefined) {
                    this.mapId = res.Maps[id].Id;
                    this.title = res.Maps[id].Title;
                    this.text = res.Maps[id].Text;
                } else
					this.error404 = true;
        }
    }

</script>