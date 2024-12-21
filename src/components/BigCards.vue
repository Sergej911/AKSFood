<template>
    <section class="big-cards">
        <div class="container">
            <div class="big-cards-wrapper">
                <ul class="big-cards-list">
                    <li v-for="item in bigCards" :key="item.id" class="big-cards-item">
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
                                    {{ item.date }}
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
const bigCards = [
    {
        id: 1,
        btn: 'Категория',
        title: 'Суп “Харчо”',
        date: '17 июля 2024 г.',
        author: '/ AksFood'
    },
    {
        id: 2,
        btn: 'Категория',
        title: 'Суп “Харчо”',
        date: '17 июля 2024 г.',
        author: '/ AksFood'
    },
    {
        id: 3,
        btn: 'Категория',
        title: 'Суп “Харчо”',
        date: '17 июля 2024 г.',
        author: '/ AksFood'
    }
]
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
        margin-left: 17px;
        margin-bottom: 21px;
        width: 125px;
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