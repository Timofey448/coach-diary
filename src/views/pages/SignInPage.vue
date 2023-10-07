<template>
	<div class="flex flex-col items-center h-screen">
		<img class="w-40 md:w-80" src="/src/assets/logo.svg" alt="coach-diary" />

		<form
			class="flex flex-col bg-white font-medium w-full sm:w-96"
			@submit.prevent="handleSubmit"
		>
			<FormInput
				type="text"
				title="Email"
				name="email"
				class="mb-4"
				placeholder="Enter your email adress"
				:errors="v.email.$errors"
				v-model:value="v.email.$model"
				required
				@input='onInput'
			/>

			<FormInput
				type="password"
				name="password"
				title="Password"
				placeholder="Enter your password"
				class="mb-4"
				:errors="v.password.$errors"
				v-model:value="v.password.$model"
				required
				@input='onInput'
			/>

			<Button class="my-3">Sign in</Button>

			<span class="mt-2 error">
				{{ authError }}
			</span>
		</form>

		<div class="flex text-sm">
      <p class="mr-2">Don`t have an account?</p>
			<router-link
        to="/sign-up"
        class="mr-1 text-green-300 hover:text-green-400"
      >
        Create an account
      </router-link>
    </div>
	</div> 
</template>

<script setup lang="ts">
import { login } from "@/api/auth";
import FormInput from '@/components/UI/FormInput.vue';
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
		required: helpers.withMessage(`Enter your name`, required)
	},
	email: {
		email: helpers.withMessage(`You entered an invalid email`, email),
		required: helpers.withMessage(`Enter your email`, required)
	},
	password: {
		minLength: helpers.withMessage(`Enter at least 8 characters`, minLength(8)),
		maxLength: helpers.withMessage(`Enter no more then 24 characters`, maxLength(24)),
		required: helpers.withMessage(`Enter your password please`, required)
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

function onInput() {
	authError.value = '';
}
</script>
