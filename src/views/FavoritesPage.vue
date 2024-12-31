<template>
    <div id="app">
        <app-head />
        <BigCards :favorites="favorites" @updateFavorites="updateFavorites" />
        <AppFavorites :favorites="favorites" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHead from '@/components/AppHead.vue'
import BigCards from '@/components/BigCards.vue'
import AppFavorites from '@/components/AppFavorites.vue'

const favorites = ref([]); // Состояние для избранных карточек

const updateFavorites = (item) => {
    const index = favorites.value.findIndex(fav => fav.id === item.id);
    if (index === -1) {
        favorites.value.push(item); // Добавить в избранное
    } else {
        favorites.value.splice(index, 1); // Убрать из избранного
    }
};
</script>

<style scoped>
 * {
     color: #000;
 }
</style>
