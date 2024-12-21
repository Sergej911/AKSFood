<template>
    <div class="">
        <header>
            <AppHead />
        </header>
        <main class="additional-container">
            <AppQuestions />
            <FormSupport />
        </main>
        <footer>
            <AppFooter />
        </footer>
    </div>
</template>

<script setup>
import AppHead from '@/components/AppHead.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppQuestions from '@/components/AppQuestions.vue';
import FormSupport from '@/components/FormSupport.vue';
</script>