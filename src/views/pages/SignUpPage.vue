<template>
  <div class="flex flex-col items-center h-screen">
    <img class="w-40 md:w-80" src="/src/assets/logo.svg" alt="coach-diary" />

    <form
      class="flex flex-col bg-white py-6 px-6 font-medium w-96"
      @submit.prevent="handleSubmit"
    >
      <FormInput
        type="text"
        title="Name"
        name="username"
        placeholder="Enter your name"
        class="mb-4"
        :errors="v.name.$errors"
        v-model:value="v.name.$model"
        required
      />

      <FormInput
        type="text"
        title="Email"
        name="email"
        placeholder="Enter your email adress"
        class="mb-4"
        :errors="v.email.$errors"
        v-model:value="v.email.$model"
        required
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
      />

      <FormInput
        type="password"
        name="confirm"
        title="Confirm password"
        placeholder="Confirm your password"
        class="mb-4"
        :errors="v.confirmedPassword.$errors"
        v-model:value="v.confirmedPassword.$model"
        required
      />

      <div class="flex items-center gap-4">
        <div>
          <input
            title="coach"
            type="radio"
            id="coach"
            name="radio"
            value="coach"
            v-model="fields.role"
            
          />
          <label for="coach" class="text-gray-500">Coach</label>
        </div>

        <div>
          <input
            title="mentee"
            type="radio"
            id="mentee"
            name="radio"
            value="student"
            v-model="fields.role"
          />
          <label for="mentee" class="text-gray-500">Mentee</label>
        </div>
      </div>

      <Button class="mt-2">Create your account</Button>
    </form>

    <div class="flex text-sm">
      <p class="mr-2 text-gray-400">Already have an account?</p>
      <router-link
        to="/sign-in"
        class="mr-1 text-green-300 hover:text-green-400"
      >
        Sign in
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from "@/components/UI/FormInput.vue";
import Button from "@/components/UI/Button.vue";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import useValidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  email,
  sameAs,
  required,
} from "@vuelidate/validators";
import { ActionType } from "../../store/modules/auth/actions";

const store = useStore();

const fields = reactive({
  name: "",
  email: "",
  password: "",
  confirmedPassword: "",
  role: "",
});

const rules = computed(() => ({
  name: {
    required: helpers.withMessage(`Enter your name`, required),
  },
  email: {
    email: helpers.withMessage(`You entered an invalid email`, email),
    required: helpers.withMessage(`Enter your email`, required),
  },
	password: {
		minLength: helpers.withMessage(`Enter at least 8 characters`, minLength(8)),
		maxLength: helpers.withMessage(`Enter no more then 24 characters`, maxLength(24)),
		required: helpers.withMessage(`Enter your password please`, required)
	},
  confirmedPassword: {
    sameAs: helpers.withMessage(`Password mismatch`, sameAs(fields.password)),
  },
}));

const v = useValidate(rules, fields);
// const isFormCorrect = ref<boolean>(false);
// const isRequestActive = ref<boolean>(false);
// const EmailErrorFromBack = ref<string>("");
// const ErrorFromBack = ref<string>("");

function handleSubmit() {
  v.value.$validate();
  if (!v.value.$error) store.dispatch(ActionType.SIGN_UP, fields);
}
</script>
