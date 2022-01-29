<template>
	<div class="error-404">
		<h1>404</h1>

		<h2>Такой страницы не существует</h2>

		<p><nuxt-link to="/">Вернуться на главную</nuxt-link></p>

	</div>
</template>

<script>

export default {
	data(){
		return {

		}
	}
}

</script>

<style>
  .error-404 {
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10rem;
  }
</style>