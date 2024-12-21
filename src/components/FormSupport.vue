<template>
    <div class="form-wrapper">
        <form class="form">
            <input type="text" name="name" placeholder="Имя" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="tel" name="tel" placeholder="Телефон" required>
            <input type="text" name="theme" placeholder="Тема" required>
            <textarea placeholder="Сообщение" required></textarea>
            <button class="form-btn btn" type="submit">
                Отправить
                <img src="/public/FormSupport-img/1.svg" alt="">
            </button>
        </form>
    </div>
</template>

<style scoped>
    .form-wrapper {
        margin: 0 auto;
        max-width: 678px;
        display: flex;
        justify-content: center;
        margin-bottom: 37px; 
    }

    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 29px;
    }

    .form input {
        font-family: 'Inter', sans-serif;
        color: #979696;
        padding: 13px 20px;
        border: 1px dashed #A4A0A0;
        outline: none;
    }

    .form textarea {
        max-width: 678px;
        height: 156px;
        padding: 13px 20px;
        font-family: 'Inter', sans-serif;
        border: 1px dashed #A4A0A0;
        outline: none;
        color: #979696;
    }

    .form-btn {
        width: 163px;
        padding: 10 0px;
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

    .form-btn:hover {
        background-color: #73a044ad;
    }

    .form-btn:active {
        background-color: #597c33;
    }
</style>