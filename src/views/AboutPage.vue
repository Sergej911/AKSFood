<template>
    <div class="">
        <header>
            <AppHead />
        </header>
        <main class="additional-container">
            <div class="about-content">
                <InfoProduct />
                <side-bar />
            </div>
            <app-video />
        </main>
        <footer>
            <AppFooter />
        </footer>
    </div>
</template>

<script setup>
import AppHead from '@/components/AppHead.vue'
import AppFooter from '@/components/AppFooter.vue'
import InfoProduct from '@/components/InfoProduct.vue'
import SideBar from '@/components/SideBar.vue'
import AppVideo from '@/components/AppVideo.vue'
</script>

<style scoped>
    .about-content {
        margin-top: 38px;
        display: flex;
        column-gap: 10px;
    }
</style>