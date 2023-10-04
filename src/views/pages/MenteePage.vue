<template>
	<div class="text-gray-800">
		<div class="p-2 flex justify-between">
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

		<div class="flex flex-col container mx-auto items-start bg-white rounded-sm py-6 px-6 shadow-md w-3/4">
			<p class="text-2xl text-gray-700 font-bold mb-6">Welcome to CoachDiary, {{ name }}!</p>
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
