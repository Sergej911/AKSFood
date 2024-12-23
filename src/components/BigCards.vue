<template>
    <section class="big-cards">
        <div class="container">
            <div class="big-cards-wrapper">
                <ul class="big-cards-list">
                    <li class="big-cards-item" v-for="item in bigCards" :key="item.id"
                    :style="{ backgroundImage: `url(${item.image})` }">
                        <router-link to="/about">
                            <div class="cards-content">
                                <button class="btn big-cards-btn">
                                    {{ item.btn }}
                                </button>
                                <p class="cards-title">
                                    {{ item.title }}
                                </p>
                                <div class="cards-bottom">
                                    <p class="cards-date">
                                        {{ item.data }}
                                    </p>
                                    <p class="cards-author">
                                        {{ item.author }}
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const bigCards = ref([]);

const fetchPosts = async () => {
    try {
        const response = await fetch('https://885190b1d68fb8fb.mokky.dev/products');
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message);
        }
        
        bigCards.value = data; 
    } catch (e) {
        console.error(e);
    }
};

onMounted(fetchPosts);
</script>

<style scoped>
    .big-cards {
        margin-bottom: 52px;
    }

    .big-cards-list {
        display: flex;
        justify-content: space-between;
    }

    .big-cards-item {
        padding: 18px 42px;
        background-image: url('/public/BigCards-img/1.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 443px;
        height: 443px;
    }

    .cards-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .big-cards-btn {
        margin-bottom: 21px;
    }

    .cards-title {
        max-width: 180px;
        margin-left: 17px;
        margin-bottom: 21px;
        font-size: 20px;
        font-weight: 400;
        line-height: 24.2px;
        color: #fff;
        border-bottom: 1px solid #fff;
    }

    .cards-bottom {
        display: flex;
    }

    .cards-date, .cards-author {
        margin-left: 17px;
        font-size: 18px;
        font-weight: 400;
        line-height: 21.78px;
        color: #fff;
        border-bottom: 1px solid #fff;
    }
</style>