<template>
	<label class="relative">
		<div class="flex">
				<span class="">
						{{ title }}
				</span>
				<span class="error ml-0.5" v-if='props.required'>*</span>

				<transition-group name="list">
						<div v-for="error of props.errors" :key="error.$uid">
								<div class="absolute ml-4 error text-sm font-normal">{{ error.$message }}</div>
						</div>
				</transition-group>
		</div>

		<input
			:title="title" 
			:type="type"
			:name="name"
			class="input mt-1 w-full"
			:placeholder="placeholder"
      :value="value"
			:errors="errors"
      @input="updateValue"
      :class="{ 'error': errors.length }"
		/>
	</label>
</template>

<script setup lang="ts">
import { ErrorObject } from '@vuelidate/core';


const emits = defineEmits(['update:value'])

function updateValue(event: Event) {
    emits('update:value', (event.target as HTMLInputElement).value)
}

const props = withDefaults(
	defineProps<{
		title: string
		name: string
		placeholder?: string
		required?: boolean
		type?: 'text' | 'email' | 'password' | 'radio'
        value: string
		errors?: ErrorObject[]
	}>(),
	{ type: 'text' }
)
</script>
