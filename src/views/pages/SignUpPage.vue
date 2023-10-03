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
					title="Name"
					name="username"
					placeholder="Enter your name"
					class="form__input"
					:class="{'withError': v.name.$errors.length}"
					:errors="v.name.$errors"
					v-model:value="v.name.$model"
					required
				/>

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
					title="password"
					placeholder="Enter your password"
					class="form__input"
					:class="{'withError': v.password.$errors.length}"
					:errors="v.password.$errors"
					v-model:value="v.password.$model"
					required
				/>

				<Input
					type="password"
					name="confirm"
					title="Confirm password"
					placeholder="Confirm your password"
					class="form__input"
					:class="{'withError': v.confirmedPassword.$errors.length}"
					:errors="v.confirmedPassword.$errors"
					v-model:value="v.confirmedPassword.$model"
					required
				/>

				<div class="form__checkboxes">
					<label class="form__checkbox">
						<input
							title="coach"
							type="radio"
							id="coach"
							name="radio"
							value="coach"
							v-model="fields.role"
						/>
						Coach
					</label>
					
					<label class="form__checkbox">
						<input
							title="mentee"
							type="radio"
							id="mentee"
							name="radio"
							value="student"
							v-model="fields.role"
							class="form__checkbox"        
						/>
						Mentee
					</label>
				</div>

				<Button class="form__btn">Create your account</Button>
			</form>

			<div class="authPage__info">
				<router-link to="/sign-in" class="authPage__infoLink">
					Log in
				</router-link>

				<p>(if you already have an account)</p> 
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import useValidate from '@vuelidate/core'
import { helpers, minLength, maxLength, email, sameAs, required } from '@vuelidate/validators';
import { ActionType } from '../../store/modules/auth/actions';


const store = useStore();

const fields = reactive({
	name: 'aaa',
	email: 'aaa@aaa.aaa',
	password: '11111111',
	confirmedPassword: '11111111',
	role: '',
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
  	confirmedPassword: {
		sameAs: helpers.withMessage(`пароли не совпадают`, sameAs(fields.password)),
	}
}));

const v = useValidate(rules, fields);
const isFormCorrect = ref<boolean>(false);
const isRequestActive = ref<boolean>(false);
const EmailErrorFromBack = ref<string>('');
const ErrorFromBack = ref<string>('');

function handleSubmit() {
  store.dispatch(ActionType.SIGN_UP, fields);
}
</script>

<style lang="scss">
.authPage {
	&__logo {
		width: 200px;
	}

	&__form {
		margin-bottom: 16px;
	}

	&__info {
		display: flex;
	}

	&__infoLink {
		margin-right: 8px;
		font-weight: 500;
		color: $mainColor;

		&:hover {
			color: $mainColorHovered;
		}
	}
}

.form {
	&__input {
		margin-bottom: 16px;
	}

	&__btn {
		margin-top: 16px;
	}

	&__checkboxes {
		display: flex;
		gap: 20px;
	}

	&__checkbox {
		display: flex;
	}

	&__errorMsg {
		color: $errorMsgColor;
	}
}
</style>
