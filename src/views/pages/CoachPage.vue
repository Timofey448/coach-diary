<template>
	<div class="">
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

		<div class="content">
			<p class="title">Welcome to CoachDiary, {{ name }}!</p>
			<p class="table-title">list of students</p>

			<div>
				<div class="mb-3 overflow-x-scroll">
					<table class="table-auto w-full mb-4 overflow-x-scroll" v-if="students.length !== 0">
						<thead class="thead">
							<tr>
								<th class="th">email</th>
								<th class="th">firstname</th>
								<th class="th">lastname</th>
								<th class="th">status</th>
							</tr>
						</thead>

						<tbody class="tbody">
							<tr v-for="student in students" :key="student.email">
								<td class="p-2">{{ student.email }}</td>
								<td class="p-2">{{ student.firstName }}</td>
								<td class="p-2">{{ student.lastName }}</td>
								<td class="p-2">{{ student.status }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="sm:flex-row flex-col">
					<input
						type="text"
						placeholder="student email"
						v-model="inputEmail"
						class="input w-full sm:w-auto sm:mr-2"
					/>
					<Button @click="addNewStudent" class="mt-3 px-4 w-full sm:w-auto">
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

function addNewStudent() {

}

onMounted(() => {
	// students = jsonStudents;
	store.dispatch(ActionType.ADD_STUDENT, jsonStudents);
});
</script>
