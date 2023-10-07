<template>
	<div class="text-gray-800">
		<div class="py-2 flex justify-between">
			<img class="w-10" src="@/assets/logo.svg" alt="coach-diary">
			<div class="flex">
				<p class="mr-2 text-gray-400">{{ email }}</p>
				<router-link
					to="/sign-in"
					@click="logout"
					class="hover:text-green-400"
				>
					Logout
				</router-link>
			</div>      
		</div>

		<div class="content">
			<p class="title">Welcome to CoachDiary, {{ name }}!</p>
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
