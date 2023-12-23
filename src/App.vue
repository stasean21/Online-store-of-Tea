<template>
  <div id="app">
    <header>
      <div id="main-header">
      <router-link to="/">Главная</router-link>
      <router-link to="/catalog">Каталог</router-link>
      <router-link to="/about">О нас</router-link>
      <router-link to="/payment-delivery">Доставка</router-link>
      </div>
      

    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
#main-header{
  color: #2a324b;
  font-size: 24px;
}

header {
  padding: 30px;
}

header a {
  text-decoration: none;
  font-weight: bold;
  color: #2a324b;
  margin-right: 20px;
}

header a.router-link-exact-active {
  color: #76928c;
}
</style>
