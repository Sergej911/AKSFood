<template>
    <div class="">
        <header>
            <AppHead />
        </header>
        <main class="additional-container">
            <form-add-post />
        </main>
        <footer>
            <AppFooter />
        </footer>
    </div>
</template>
<script setup>
import FormAddPost from '@/components/FormAddPost.vue'
import AppHead from '@/components/AppHead.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>