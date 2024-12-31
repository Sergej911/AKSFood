<template>
    <section class="favorites-section">
        <div class="container">
            <h2>Избранные рецепты</h2>
            <ul class="favorites-list">
                <li class="favorites-item" v-for="item in favorites" :key="item.id"
                    :style="{ backgroundImage: `url(${item.image})` }">
                    <div class="cards-content">
                        <p class="cards-title">{{ item.title }}</p>
                        <div class="cards-bottom">
                            <p class="cards-date">{{ item.data }}</p>
                            <p class="cards-author">{{ item.author }}</p>
                        </div>
                    </div>
                </li>
                <li v-if="favorites.length === 0">Нет избранных карточек.</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    favorites: Array
});
</script>