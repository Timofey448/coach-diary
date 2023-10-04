<template>
	<label class="relative">
        <div class="flex">
            <span class="relative text-gray-500">
                {{ title }}
            </span>
            <span class="text-pink-400 ml-0.5" v-if='props.required'>*</span>

            <transition-group name="list">
                <div v-for="error of props.errors" :key="error.$uid">
                    <div class="absolute ml-4 text-pink-400 text-sm font-normal">{{ error.$message }}</div>
                </div>
            </transition-group>
        </div>

		<input
			:title="title" 
			:type="type"
			:name="name"
			class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300
            focus:outline-none focus:border-sky-400
            disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none"
			:placeholder="placeholder"
            :value="value"
			:errors="errors"
            @input="updateValue"
            :class="{ 'text-pink-500': errors.length }"
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
