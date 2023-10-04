<template>
  	<router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
            <component :is=Component></component>
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { ActionType } from './store/modules/auth/actions'


const store = useStore();

onMounted(() => {
    let currentUserEmail = localStorage.getItem("currentUser");

    if (currentUserEmail != '') {
      	store.dispatch(ActionType.SIGN_IN, { email: currentUserEmail });
    }
})
</script>

<style lang="scss">
@import '@/assets/styles/base.scss';
</style>
