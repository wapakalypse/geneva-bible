<template>

    <div class="content">

        <h1>Статьи</h1>

		<div class="text-two-column">
            <ArticlesList />
		</div>
        
    </div>

</template>

<script>

    export default {
        name: 'Articles',
        head() {
            return {
                title: 'Статьи Женевской Библии онлайн с пояснениями.',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Полный список богословских и других статей Женевской Библии онлайн с пояснениями. Новая Женевская Библия для чтения онлайн c комментариями.'}],
            }
        }
    }

</script>

<style>



</style>
