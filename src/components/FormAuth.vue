<template>
    <h1>Вход</h1>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <div class="form-wrapper">
        <form class="form" @submit.prevent="auth">
            <input v-model="form.name" type="text" name="name" placeholder="Имя" required>
            <input v-model="form.password" type="password" name="password" placeholder="Пароль" required>
            <div class="btn-wrapper">
                <p class="auth">Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link></p>
                <button class="form-btn btn" type="submit">
                    Войти
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
    password: ''
});

const errorMessage = ref('');

const auth = async () => {
    try {
        const response = await fetch("https://885190b1d68fb8fb.mokky.dev/auth", { 
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form.value)
        });

        if (!response.ok) {
            const data = await response.json();
            errorMessage.value = 'Произошла ошибка при входе';
            return;
        }

        const data = await response.json();
        console.log('Авторизация прошла успешно:', data);

        if (data.token) {
            localStorage.setItem('token', data.token);
            console.log('Токен сохранен в localStorage:', data.token);

            const userResponse = await fetch("https://885190b1d68fb8fb.mokky.dev/auth_me", {
                method: "GET",
                headers: { 
                    Authorization: `Bearer ${data.token}` 
                }
            });

            if (!userResponse.ok) {
                console.error('Ошибка при проверке авторизации');
                return;
            }

            const userData = await userResponse.json();
            console.log('Данные пользователя:', userData);
        }

    } catch (error) {
        errorMessage.value = 'Сетевая ошибка, попробуйте позже';
        console.error('Ошибка при авторизации:', error);
    }
};
</script>

<style scoped>
.auth {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: #2d86af;
}

h1 {
    margin-top: 50px;
    margin-bottom: 89px;
    font-size: 40px;
    line-height: 20px;
    text-align: center;
    color: #000;
}

.error-message {
    margin-bottom: 20px;
    color: red;
    font-size: 15px;
    text-align: center;
}

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
    padding: 13px 8px;
    border: 1px dashed #A4A0A0;
    outline: none;
}

.btn-wrapper {
    text-align: center;
}

.form-btn {
    margin-bottom: 455px;
    margin-top: 60px;
    width: 338px;
    padding: 20px 0;
    font-size: 35px;
    line-height: 20px;
    transition: all 0.3s;
}

.form-btn:hover {
    background-color: #73a044ad;
}

.form-btn:active {
    background-color: #597c33;
}
</style>
