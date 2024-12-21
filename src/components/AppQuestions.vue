<template>
    <div class="questions">
        <ul class="questions-list">
            <li v-for="item in questions" :key="item.id" class="questions-item">
                <h3 class="questions-title">
                    <b>{{ item.title }}</b>
                </h3>
                <p class="questions-text">
                    {{ item.text }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup>
const questions = [
    {
        id: 1,
        title: 'Появились вопросы?',
        text: 'Если у вас возникли вопросы или нужна дополнительная информация о наших рецептах, функциональностисайта или чем-то ещё, не стесняйтесь обращаться. Мы готовы помочь вам разобраться и получить нужнуюинформацию.'
    },
    {
        id: 2,
        title: 'Появились вопросы?',
        text: 'Если у вас возникли вопросы или нужна дополнительная информация о наших рецептах, функциональностисайта или чем-то ещё, не стесняйтесь обращаться. Мы готовы помочь вам разобраться и получить нужнуюинформацию.'
    },
    {
        id: 3,
        title: 'Появились вопросы?',
        text: 'Если у вас возникли вопросы или нужна дополнительная информация о наших рецептах, функциональностисайта или чем-то ещё, не стесняйтесь обращаться. Мы готовы помочь вам разобраться и получить нужнуюинформацию.'
    },
]
</script>

<style scoped>
    .questions {
        margin-top: 43px;
        margin-bottom: 33px;
    }

    .questions-list {
        display: flex;
        justify-content: space-between;
    }

    .questions-item {
        max-width: 347px;
    }

    .questions-title {
        margin-bottom: 22px;
        font-size: 20px;
        font-weight: 400;
        line-height: 24.2px;
        color: #000;
    }

    .questions-text {
        font-size: 20px;
        font-weight: 400;
        line-height: 24.2px;
        color: #8B8A8A;
    }
</style>