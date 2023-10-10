<template>
    <div class="p-2 flex justify-between">
        <img class="w-10" src="@/assets/logo.svg" alt="coach-diary" />
        <div class="flex">
            <p class="mr-2 text-gray-400">{{ email }}</p>
            <router-link
                to="/sign-in"
                class="hover:text-green-400"
                @click="logout"
            >
                Logout
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const email = computed<string>(() => store.state.auth.email)

function logout() {
    store.dispatch('signOut')
}
</script>
