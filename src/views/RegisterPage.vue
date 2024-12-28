<template>
    <div class="">
        <header>
            <AppHead />
        </header>
        <main class="additional-container">
            <form-register />
        </main>
        <footer>
            <AppFooter />
        </footer>
    </div>
</template>
<script setup>
import AppHead from '@/components/AppHead.vue'
import AppFooter from '@/components/AppFooter.vue'
import FormRegister from '@/components/FormRegister.vue'
</script>