<template>
    <div class="text-gray-800">
        <Topbar />

        <div class="content">
            <p class="title">Welcome to CoachDiary, {{ name }}!</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import Topbar from '@/components/Topbar.vue'

const store = useStore()
const name = computed<string>(() => store.state.auth.name)
</script>
