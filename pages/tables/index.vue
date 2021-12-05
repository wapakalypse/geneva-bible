<template>

    <div class="content">

        <h1>Таблицы</h1>

	    <div class="text-two-column">
            <TablesList />
        </div>
        
    </div>

</template>

<script>

    export default {
        name: 'Tables',
        head() {
            return {
                title: 'Таблицы Женевской Библии онлайн с комментариями и пояснениями.',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Полный список таблиц и схем с пояснениями Женевской Библии онлайн. Новая Женевская Библия для чтения онлайн c комментариями.'}],
            }
        }
    }

</script>

<style>



</style>
