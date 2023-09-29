<template>
	<div class="homePage page">
		<router-link to="/sign-up">
			<img
				class="homePage__logo"
				src="/src/assets/logo.svg"
				alt="coach-diary"
			>
		</router-link>    
	</div>
</template>

<style lang="scss" scoped>
.homePage {
	display: flex;
	align-items: center;
	justify-content: center;

	&__logo {
		height: 320px;
		width: 320px;
	}
}
</style>
