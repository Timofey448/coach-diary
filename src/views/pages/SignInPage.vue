<template>
  	<div class="authPage page">
		<div class="container">
			<img
				class="authPage__logo"
				src="/src/assets/logo.svg"
				alt="coach-diary"
			>

			<form class="authPage__form form" @submit.prevent="handleSubmit">
				<Input
					type="text"
					title="Email"
					name="email"
					placeholder="Enter your email adress"
					class="form__input"
					:class="{'withError': v.email.$errors.length}"
					:errors="v.email.$errors"
					v-model:value="v.email.$model"
					required
				/>

				<Input
					type="password"
					name="password"
					title="Password"
					placeholder="Enter your password"
					class="form__input"
					:class="{'withError': v.password.$errors.length}"
					:errors="v.password.$errors"
					v-model:value="v.password.$model"
					required
				/>

				<Button class="form__btn">Create your account</Button>

				<span class="form__errorMsg">{{ authError }}</span>
			</form>
		</div>
  	</div> 
</template>

<script setup lang="ts">
import { login } from "@/api/auth";
import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import useValidate from '@vuelidate/core'
import { helpers, minLength, maxLength, email, required } from '@vuelidate/validators';
import type { Fields } from '../../store/modules/auth/interfaces';
import { ActionType } from '../../store/modules/auth/actions'


const store = useStore();
const authError = ref<string>('');

const fields: Fields = reactive({
	name: '',
	email: '',
	password: '',
});

const rules = computed(() => ({
	name: {
		required: helpers.withMessage(`Введите свое имя`, required)
	},
	email: {
		email: helpers.withMessage(`Вы ввели неверный email`, email),
		required: helpers.withMessage(`Введите email`, required)
	},
	password: {
		minLength: helpers.withMessage(`Введите не менее 8 символов`, minLength(8)),
		maxLength: helpers.withMessage(`Введите не более 24 символов`, maxLength(24)),
		required: helpers.withMessage(`Введите пароль`, required)
	},
}));

const v = useValidate(rules, fields);
const isFormCorrect = ref<boolean>(false);

function handleSubmit() {
	if (login(fields) === undefined) {
		authError.value = "Authentication Error"
		return;
	}
  	store.dispatch(ActionType.SIGN_IN, fields);
}
</script>
