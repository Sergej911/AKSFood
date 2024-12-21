<template>
    <section class="cards-menu">
        <div class="container">
            <ul class="menu-list">
                <li v-for="item in menuCards" :key="item.id" class="menu-item">
                    <div class="menu-content">
                        <img class="menu-img" src="/public/CardsMenu-img/1.jpg" width="255" height="204" alt="">
                        <div class="menu-info">
                            <button class="btn menu-btn">
                                {{ item.btn }}
                            </button>
                            <h2 class="menu-title">
                                {{ item.title }}
                            </h2>
                            <p class="menu-descr">
                                {{ item.description }}
                            </p>
                            <div class="menu-info-bottom">
                                <div class="views">
                                    <img src="/public/CardsMenu-img/eye.png" alt="">
                                    <p>19</p>
                                </div>
                                /
                                <p class="menu-date">
                                      15 июля 2024 г.  
                                </p>
                                /
                                <p class="menu-author">
                                    AksFood
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="pages-buttons">
                <button class="btn page-btn">
                    1
                </button>
                <button class="btn page-btn">
                    2
                </button>
                <button class="btn next-btn">
                    Далее
                </button>
                <button class="btn last-btn">
                    Последняя
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
const menuCards = [
    {
        id: 1,
        btn: 'Категория',
        title: 'Суп “Харчо”',
        description: 'Мягкие, сладкие, вкусные американские блинчики, которые еще называют  панкейки (pancakes), отлично сочетаются с медом. Панкейки понравятся и  взрослым, и детям. Блинчики на молоке станут отличным завтраком.',
    },
    {
        id: 1,
        btn: 'Категория',
        title: 'Суп “Харчо”',
        description: 'Мягкие, сладкие, вкусные американские блинчики, которые еще называют  панкейки (pancakes), отлично сочетаются с медом. Панкейки понравятся и  взрослым, и детям. Блинчики на молоке станут отличным завтраком.',
    },
    {
        id: 1,
        btn: 'Категория',
        title: 'Суп “Харчо”',
        description: 'Мягкие, сладкие, вкусные американские блинчики, которые еще называют  панкейки (pancakes), отлично сочетаются с медом. Панкейки понравятся и  взрослым, и детям. Блинчики на молоке станут отличным завтраком.',
    },
    {
        id: 1,
        btn: 'Категория',
        title: 'Суп “Харчо”',
        description: 'Мягкие, сладкие, вкусные американские блинчики, которые еще называют  панкейки (pancakes), отлично сочетаются с медом. Панкейки понравятся и  взрослым, и детям. Блинчики на молоке станут отличным завтраком.',
    },
    {
        id: 1,
        btn: 'Категория',
        title: 'Суп “Харчо”',
        description: 'Мягкие, сладкие, вкусные американские блинчики, которые еще называют  панкейки (pancakes), отлично сочетаются с медом. Панкейки понравятся и  взрослым, и детям. Блинчики на молоке станут отличным завтраком.',
    },
    {
        id: 1,
        btn: 'Категория',
        title: 'Суп “Харчо”',
        description: 'Мягкие, сладкие, вкусные американские блинчики, которые еще называют  панкейки (pancakes), отлично сочетаются с медом. Панкейки понравятся и  взрослым, и детям. Блинчики на молоке станут отличным завтраком.',
    },
]
</script>

<style scoped>
    .cards-menu {
        margin-bottom: 39px;
    }

    .menu-item:not(:last-child) {
        margin-bottom: 29px;
    }

    .menu-content {
        max-width: 775px;
        display: flex;
    }

    .menu-img {
        margin-right: 43px;
    }

    .menu-info {
        max-width: 472px;
    }

    .menu-btn {
        margin: 10px 0;
        padding: 3px 0;
    }

    .menu-title {
        margin-bottom: 10px;
        font-size: 24px;
        line-height: 29.05px;
        color: #000;
    }

    .menu-descr {
        margin-bottom: 13px;
        font-size: 15px;
        line-height: 18.15px;
        color: #796D6D;
    }

    .menu-info-bottom {
        display: flex;
        align-items: center;
        column-gap: 14px;
        font-size: 15px;
        line-height: 18.15px;
        color: #000;
    }

    .views {
        display: flex;
        align-items: center;
    }

    .pages-buttons {
        margin-top: 39px;
        display: flex;
        column-gap: 8px;
    }

    .page-btn {
        width: 28px;
        padding: 5px 0;
        border-radius: 2px;
        font-size: 20px;
        line-height: 24.2px;
        transition: all 0.3s;
    }

    .page-btn:hover {
        background-color: #73a044ad;
    }

    .page-btn:active {
        background-color: #597c33;
    }

    .next-btn {
        width: 54px;
        padding: 8px 0;
        font-size: 15px;
        line-height: 18.15px;
        border-radius: 2px;
        transition: all 0.3s;
    }

    .next-btn:hover {
        background-color: #73a044ad;
    }

    .next-btn:active {
        background-color: #597c33;
    }

    .last-btn {
        width: 112px;
        padding: 8px 0;
        font-size: 15px;
        line-height: 18.15px;
        border-radius: 2px;
        transition: all 0.3s;
    }

    .last-btn:hover {
        background-color: #73a044ad;
    }

    .last-btn:active {
        background-color: #597c33;
    }
</style>