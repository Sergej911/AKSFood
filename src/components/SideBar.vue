<template>
    <aside class="sidebar">
        <section class="search">
            <h2 class="title search-title">Поиск</h2>
            <form action="search">
                <input type="text" placeholder="Поиск">
                <button type="submit">
                    <img src="/public/SideBar-img/search.svg" alt="Поиск">
                </button>
            </form>
        </section>

        <section class="new">
            <h2 class="title new-title">Новинки</h2>
            <ul class="new-list">
                <li v-for="item in newItems" :key="item.id" class="new-item">
                    <img src="/public/SideBar-img/1.jpg" alt="">
                    <div class="new-info">
                        <h3 class="info-title">
                            {{ item.title }}
                        </h3>
                        <p class="info-date">
                            {{ item.date }}
                        </p>
                    </div>
                </li>
            </ul>
        </section>

        <section class="advertising">
            <h2 class="title advertising-title">Реклама</h2>
            <img src="/public/SideBar-img/advertising.jpg" width="289" height="275" alt="">
        </section>

        <section class="gallery">
            <h2 class="title gallery-title">Галерея</h2>
            <ul class="gallery-list">
                <li v-for="item in galleryCards" :key="item.id" class="gallery-item">
                    <img :src="item.img" alt="">
                </li>
            </ul>
        </section>

        <section class="category">
            <h2 class="title category-title">Категории</h2>
            <ul class="category-list">
                <li v-for="item in categories" :key="item.id" class="category-item">
                    <a href="#">{{ item.title }}</a>
                    <p class="category-count">{{ item.count }}</p>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script setup>
const newItems = [
    {
        id: 1,
        img: "/public/SideBar-img/1.jpg",
        title: "Суп “Харчо”",
        date: "17 июля 2024 г."
    },
    {
        id: 2,
        img: "/public/SideBar-img/1.jpg",
        title: "Суп “Харчо”",
        date: "17 июля 2024 г."
    },
    {
        id: 3,
        img: "/public/SideBar-img/1.jpg",
        title: "Суп “Харчо”",
        date: "17 июля 2024 г."
    },
]

const galleryCards = [
    {
        id: 1,
        img: "/public/SideBar-img/gallery-card.jpg",
    },
    {
        id: 2,
        img: "/public/SideBar-img/gallery-card.jpg",
    },
    {
        id: 3,
        img: "/public/SideBar-img/gallery-card.jpg",
    },
    {
        id: 4,
        img: "/public/SideBar-img/gallery-card.jpg",
    },
    {
        id: 5,
        img: "/public/SideBar-img/gallery-card.jpg",
    },
    {
        id: 6,
        img: "/public/SideBar-img/gallery-card.jpg",
    },
    {
        id: 7,
        img: "/public/SideBar-img/gallery-card.jpg",
    },
    {
        id: 8,
        img: "/public/SideBar-img/gallery-card.jpg",
    },
    {
        id: 9,
        img: "/public/SideBar-img/gallery-card.jpg",
    },
]

const categories = [
    {
        id: 1,
        title: "Завтраки/Напитки",
        count: '(7)',
    },
    {
        id: 2,
        title: "Завтраки/Напитки",
        count: '(7)',
    },
    {
        id: 3,
        title: "Завтраки/Напитки",
        count: '(7)',
    },
    {
        id: 4,
        title: "Завтраки/Напитки",
        count: '(7)',
    },
]
</script>

<style scoped>
    .search {
        margin-bottom: 49px;
    }

    .search-title {
        margin-bottom: 11px;
    }

    form {
        display: flex;
    }

    .search input {
        width: 232px;
        padding: 5px;
        border: 1px solid #817D7D;
        height: 45px;
    }

    .search button {
        padding: 7px;
        width: 45px;
        height: 45px;
        background-color: #74A044;
    }

    .new {
        margin-bottom: 35px;
    }

    .new-list {
        display: flex;
        flex-direction: column;
        row-gap: 11px;
    }

    .new-item {
        max-width: 225px;
        display: flex;
        align-items: center;
        column-gap: 27px;
    }

    .new-title {
        margin-bottom: 15px;
    }

    .info-title {
        margin-bottom: 8px;
        font-size: 20px;
        line-height: 24.2px;
        color: #000;
    }

    .info-date {
        font-size: 13px;
        line-height: 15.73px;
        color: #8F8989;
    }

    .advertising {
        margin-bottom: 26px;
    }

    .advertising-title {
        margin-bottom: 17px;
    }

    .advertising img {
        margin-left: 5px;
    }

    .gallery {
        margin-bottom: 31px;
    }

    .gallery-title {
        margin-bottom: 16px;
    }

    .gallery-list {
        max-width: 310px;
        display: flex;
        flex-wrap: wrap;
        gap: 11px;
    }

    .category-title {
        margin-bottom: 14px;
    }

    .category-list {
        margin-left: 5px;
    }

    .category-item {
        margin-bottom: 12px;
        padding-bottom: 19px;
        display: flex;
        column-gap: 100px;
        border-bottom: 1px solid #959393;
    }

    .category-item a {
        font-size: 20px;
        line-height: 24.2px;
        color: #8B8888;
    }

    .category-count {
        font-size: 20px;
        line-height: 24.2px;
        color: #8B8888;
    }
</style>