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

		<div class="flex-col">
			<p>Welcome to CoachDiary, {{ name }}!</p>
			<p>list of students</p>

			<div class="userPage__content">
				<table class="table" v-if="students.length !== 0">
					<thead>
						<tr>
						<th>email</th>
						<th>firstname</th>
						<th>lastname</th>
						<th>status</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="student in students">
							<td>{{ student.email }}</td>
							<td>{{ student.firstName }}</td>
							<td>{{ student.lastName }}</td>
							<td>{{ student.status }}</td>
						</tr>
					</tbody>
				</table>

				<div class="flex-row">
					<input
						type="text"
						placeholder="student email"
						v-model="inputEmail"
					/>
					<Button @click="addNewStudent">
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

<style lang="scss">
.table {
	max-width: 500px;
	width: 500px;
	margin-bottom: 12px;

	& th {
		text-align: left;
	}
}

.flex-col {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.flex-row {
		display: flex;
		align-items: center;
		justify-content: center;
}
</style>
