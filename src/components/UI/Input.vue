<template>
	<label class="input">
        <div class="input__desc">
            <span :class="['input__title', { 'input__title--required': required }]">
                {{ title }}
            </span>

            <transition-group name="list">
                <div v-for="error of props.errors" :key="error.$uid">
                    <div class="input__errorMessage">{{ error.$message }}</div>
                </div>
            </transition-group>
        </div>

		<input
			:title="title" 
			:type="type"
			:name="name"
			class="input__field"
			:placeholder="placeholder"
            :value="value"
			:errors="errors"
            @input="updateValue"
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

<style lang="scss" scoped>
.input {
    position: relative;

    &__title {
        margin-left: 16px;
        position: relative;
        display: inline;
        color: rgba(0, 0, 0, 0.64);
    }

    &__title--required::after {
        margin-left: 4px;
        content: '*';
        color: $errorMsgColor;
    }

	&__field {
		box-sizing: border-box;
		margin-top: 4px;
		padding: 16px;
		font-size: 16px;
		line-height: 24px;
		width: 100%;
		height: 64px;
		background-color: $inputBgColor;
		border-top: 1px solid rgba(0, 180, 185, 0.4);
		transition: all 0.3s ease-in;

		&:hover {
			border-top: 1px solid rgba(0, 180, 185, 1);
		}

		&.withError {
			color: $errorMsgColor;
			background-color: rgba(241, 233, 233, 1);
		}

		&::placeholder {
			font-size: 16px;
			line-height: 24px;
			color: rgba(0, 0, 0, 0.32);
		}

		&--required {
			background-color: rgba(241, 233, 233, 1);
		}
	}

    &__desc {
        display: flex;
    }

    &__errorMessage {
        position: absolute;
        margin-left: 16px;
        font-size: 16px;
        line-height: 24px;
        color: $errorMsgColor;
        transition: all 0.3s ease-out;
    }

    @media (max-width: 1440px) {
        &__title {
            font-size: 16px;
            line-height: 24px;
        }

        &__field {
            height: 56px;
            margin-top: 4px;
        }
    }

    @media (max-width: 1196px) {
        &__field {
            height: 64px;
            margin-top: 8px;
        }
    }

    @media (max-width: 996px) {
        &__field {
            height: 56px;
            margin-top: 4px;
        }
    }

    @media (max-width: 768px) {
        &__field {
            margin-top: 4px;
            padding: 16px;
            width: 100%;
            height: 64px;
            background-color: $inputBgColor;
            border-top: 1px solid rgba(0, 180, 185, 0.4);

            &::placeholder {
                font-size: 16px;
                line-height: 24px;
            }

            &--required {
                background-color: rgba(241, 233, 233, 1);
            }
        }
    }
}
</style>
