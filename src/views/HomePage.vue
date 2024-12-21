<template>
    <div class="">
        <header>
            <AppHead />
        </header>
        <main>
            <section>
                <BigCards />
            </section>
            <section class="menu">
                <cards-menu />
                <side-bar />
            </section>
        </main>
        <footer>
            <AppFooter />
        </footer>
    </div>
</template>

<script setup>
import AppHead from '@/components/AppHead.vue'
import BigCards from '@/components/BigCards.vue'
import AppFooter from '@/components/AppFooter.vue'
import CardsMenu from '@/components/CardsMenu.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<style scoped>
    .menu {
        display: flex;
        justify-content: center;
        column-gap: 42px;
    }
</style>