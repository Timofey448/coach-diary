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
			<p class="text-sm font-medium text-gray-500 mb-4">list of students</p>

			<div>
				<table class="table-auto w-full mb-4" v-if="students.length !== 0">
					<thead class="text-xs uppercase text-gray-500">
						<tr>
						<th class="p-2 text-left">email</th>
						<th class="p-2 text-left">firstname</th>
						<th class="p-2 text-left">lastname</th>
						<th class="p-2 text-left">status</th>
						</tr>
					</thead>

					<tbody class="text-sm divide-y divide-gray-200">
						<tr v-for="student in students" :key="student.email">
							<td class="p-2">{{ student.email }}</td>
							<td class="p-2">{{ student.firstName }}</td>
							<td class="p-2">{{ student.lastName }}</td>
							<td class="p-2">{{ student.status }}</td>
						</tr>
					</tbody>
				</table>

				<div class="flex justify-center">
					<input
						type="text"
						placeholder="student email"
						v-model="inputEmail"
						class="mr-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300
            focus:outline-none focus:border-sky-400
            disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none"
					/>
					<Button @click="addNewStudent" class="px-4">
						Add your student
					</Button>
				</div>

			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import jsonStudents from '@/fixtures/coach/students.json';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Button from '@/components/UI/Button.vue';
import { ActionType } from '../../store/modules/students/actions'


const store = useStore();
const inputEmail = ref<string>('');
const email = computed<string>(() => store.state.auth.email);
const students = computed<string>(() => store.state.students.students);
const name = computed<string>(() => store.state.auth.name);

function logout() {
	store.dispatch('signOut');
}

function addNewStudent() {}

onMounted(() => {
	// students = jsonStudents;
	store.dispatch(ActionType.ADD_STUDENT, jsonStudents);
});
</script>
