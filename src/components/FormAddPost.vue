<template>
    <div class="form-wrapper">
        <h1>Добавить новый пост</h1>
        <form class="form">
            <label for="title">Заголовок:</label>
            <input v-model="form.title" type="text" id="title" name="title" required>

            <label for="data">Дата публикации:</label>
            <input v-model="form.data" type="text" id="text" name="text" required>

            <label for="author">Автор поста:</label>
            <input v-model="form.author" type="text" id="author" name="author" rows="5" required>

            <label for="image">Изображение готового блюда:</label>
            <input type="file" @change="handleFileUpload" id="image" name="image" accept="image/*">

            <button @click.prevent="fetchPosts" class="btn" type="submit">Добавить пост</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    btn: 'Категория',
    title: '',
    data: '',
    author: '',
    image: null
})

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            form.value.image = e.target.result
        };
        reader.readAsDataURL(file)
    }
};

const fetchPosts = async () => {
    try {
        const data = await fetch('https://885190b1d68fb8fb.mokky.dev/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form.value)
        })
        const response = await data.json()
        console.log(response)
        
        if (!response.ok) {
            throw new Error(response.message)
        }
    } catch (e) {
        console.log(e)
    }
}
</script>

<style scoped>
    .form-wrapper {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
    text-align: center;
    margin-bottom: 20px;
    }

    .form {
        max-width: 678px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    label {
        font-size: 20px;
        display: block;
        margin-bottom: 8px;
        color: #000;
    }

    input[type="text"],
    textarea {
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        outline: none;
        border: 1px dashed #A4A0A0;
    }

    input[type="file"] {
        margin-bottom: 20px;
    }

    .img-btn {
        margin-bottom: 20px;
    }

    button {
        width: 163px;
        padding: 15px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 18px;
        border-radius: 0;
        font-size: 14px;
        line-height: 16.94px;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        transition: all 0.3s;
    }

    button:hover {
        background-color: #73a044ad;
    }

    button:active {
        background-color: #597c33;
    }
</style>