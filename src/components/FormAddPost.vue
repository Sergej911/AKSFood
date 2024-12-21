<template>
    <div class="form-wrapper">
        <h1>Добавить новый пост</h1>
        <form class="form">
            <label for="title">Заголовок:</label>
            <input type="text" id="title" name="title" required>

            <label for="image">Изображение:</label>
            <input type="file" id="image" name="image" required>

            <label for="description">Описание:</label>
            <textarea id="description" name="description" rows="5" required></textarea>

            <button class="btn" type="submit">Добавить пост</button>
        </form>
    </div>
</template>

<script setup>

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
        transition: all 0.3s;
    }

    button:hover {
        background-color: #73a044ad;
    }
</style>