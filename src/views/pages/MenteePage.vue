<template>
	<div class="userPage page">

		<div class="header">
			<img class="header__img" src="@/assets/logo.svg" alt="coach-diary">
			<div class="header__userInfo">
				<p class="header__email">{{ email }}</p>
				<router-link
					to="/sign-in"
					@click="logout"
					class="header__logout"
				>
					Logout
				</router-link>
			</div>      
		</div>

		<div class="userPage__content">
			<p class="msg">Welcome to CoachDiary, {{ name }}!</p>
		</div>
		
	</div>
</template>

<script setup lang=ts>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ActionType } from '../../store/modules/auth/actions'


const store = useStore();
const email = computed<string>(() => store.state.auth.email);
const name = computed<string>(() => store.state.auth.name);


function logout() {
	store.dispatch(ActionType.SIGN_OUT);
}
</script>

<style lang="scss">
.userPage {
	&__content {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}

.msg {
	font-weight: 500;
	font-size: 24px;
}
</style>
