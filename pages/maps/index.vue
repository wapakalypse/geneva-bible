<template>

    <div class="content">

        <h1>Карты</h1>

	    <div class="text-two-column">
            <MapsList />
        </div>

    </div>

</template>

<script>

    export default {
        name: 'Maps',
        head() {
            return {
                title: 'Карты Женевской Библии онлайн с комментариями и пояснениями.',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Полный список географических карт с пояснениями Женевской Библии онлайн. Новая Женевская Библия для чтения онлайн c комментариями.'}],
            }
        }
    }

</script>

<style>



</style>
