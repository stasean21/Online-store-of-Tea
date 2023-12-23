<template>
  <div class="main-page">
    <div class="content-overlay">
      <h1>Добро пожаловать</h1>
      <h1>в ароматный чайный мир</h1>
      <router-link to="/catalog">
        <button>Начать покупки</button>
      </router-link>
    </div>
    <img id="background-image" src="@/assets/background-main.png" alt="main-logo">
  </div>
</template>

<script>
export default {
  // Ваш код компонента
};
</script>

<style scoped>
.main-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
  margin-top: -200px; /* Поднимаем содержимое на 200 пикселей вверх */
}

#background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Стили для текста и кнопки */
.content-overlay h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 54px; /* Увеличиваем размер шрифта до 36 пикселей */
  margin: 0;
  background: linear-gradient(to right, #8e44ad, #3498db, #9c9b9b); /* Градиент цвета */
  -webkit-background-clip: text; /* Ограничиваем градиент только текстом */
  color: transparent; /* Делаем текст невидимым, так как он уже задан через градиент */
}

.content-overlay button {
  margin-top: 20px;
  padding: 15px 30px; /* Увеличиваем размер кнопки */
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 18px; /* Увеличиваем размер шрифта кнопки */
  border-radius: 8px; /* Закругляем углы кнопки */
  transition: background-color 0.3s, color 0.3s; /* Плавное изменение цвета при наведении */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content-overlay button:hover {
  background-color: white;
  color: #3498db;
}
</style>
