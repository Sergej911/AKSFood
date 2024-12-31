<template>
    <header class="header">
        <div class="header-wrapper">
            <div class="container">
                <div class="header-nav">
                    <div class="header-links">
                        <a href="#" target="_blank">
                            <img src="/public/AppHead-img/1.svg" alt="">
                        </a>
                        <a href="#" target="_blank">
                            <img src="/public/AppHead-img/2.svg" alt="">
                        </a>
                        <a href="#" target="_blank">
                            <img src="/public/AppHead-img/3.svg" alt="">
                        </a>
                        <a href="#" target="_blank">
                            <img src="/public/AppHead-img/4.svg" alt="">
                        </a>
                        <a href="#" target="_blank">
                            <img src="/public/AppHead-img/5.svg" alt="">
                        </a>
                    </div>
                    <div class="header-search">
                        <router-link class="register" to="/register">Регистрация</router-link>
                        <img src="/public/AppHead-img/search.svg" width="18" height="18" alt="Поиск">
                        <p>Поиск</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-logo">
            <img src="/public/AppHead-img/header-logo.png" alt="">
        </div>
        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-item">
                    <router-link to="/">Главная</router-link>
                </li>
                <li class="nav-item">
                    <router-link >Завтраки\Напитки</router-link>
                </li>
                <li class="nav-item">
                    <router-link >Основные Блюда</router-link>
                </li>
                <li class="nav-item">
                    <router-link >Десерты\Выпечка</router-link>
                </li>
                <li class="nav-item">
                    <router-link >Закуски\Салаты</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/post">Добавить Пост</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/support">Поддержка</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/favorite">Избранное</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

</script>

<style scoped>
    .header-wrapper {
        margin-bottom: 64px;
        padding: 17px 0;
        background-color: #74A044;
    }

    .header-nav {
        display: flex;
        justify-content: space-between;
    }

    .header-links {
        display: flex;
        align-items: center;
        column-gap: 17px;
    }

    .header-search {
        display: flex;
        align-items: center;
        column-gap: 8px;
    }

    .register {
        margin-right: 15px;
        transition: all 0.3s;
    }

    .register:hover {
        color: #ffffff9f;
    }

    .header-search p {
        font-size: 13px;
        font-weight: 400;
        line-height: 15.73px;
        color: #fff;
    }

    .header-logo {
        text-align: center;
        margin-bottom: 64px;
    }

    nav {
        margin-bottom: 24px;
    }

    .nav-list {
        display: flex;
        justify-content: center;
        column-gap: 28px;
    }

    .nav-item {
        font-size: 13px;
        font-weight: 400;
        line-height: 15.73px;
        color: #000;
        transition: all 0.3s;
    }

    .nav-item:hover {
        color: #74A044;
    }
</style>