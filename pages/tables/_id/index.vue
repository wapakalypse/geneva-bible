<template>

    <div class="content" v-if="error404 == false">

        <h1>{{ title }}</h1>

        <div v-html="text" class="content-text text-two-column"></div>

        <img class="content-image" :src="'/tables/t' + $route.params.id + '.png'" />

        <div class="text-two-column">
            <TablesList />
        </div>
        
    </div>

    <div v-else>
		<Error404 />
	</div>

</template>

<script>

    export default {
        name: 'Table',
        head() {
            return {
                title: 'Таблица "' + this.title + '". Женевская Библия онлайн с комментариями',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Новая Женевская Библия онлайн. Таблица "' + this.title + '". Комментарий к таблице...'}],
            }
        },
        data(){
            return {
                tableId: null,
                title: '',
                text: [],
                error404: false
            }
        },
        async fetch() {
            let id = Number(this.$route.params.id) - 1;
            const res = await fetch(process.env.baseUrl + '/tables.json')
                .then(res => res.json())
                if(res.Tables[id] != undefined) {
                    this.tableId = res.Tables[id].Id;
                    this.title = res.Tables[id].Title;
                    this.text = res.Tables[id].Text;
                } else
					this.error404 = true;
        }
    }

</script>
