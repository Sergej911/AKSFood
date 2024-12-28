<template>
    <div class="">
        <header>
            <AppHead />
        </header>
        <main class="additional-container">
            <form-auth />
        </main>
        <footer>
            <AppFooter />
        </footer>
    </div>
</template>
<script setup>
import AppHead from '@/components/AppHead.vue'
import AppFooter from '@/components/AppFooter.vue'
import FormAuth from '@/components/FormAuth.vue'
</script>