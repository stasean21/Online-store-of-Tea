<template>
  <div id="app">
    <header>
      <div id="main-header">
            <div id="left-header">
                    <router-link to="/">Главная</router-link>
                          <router-link to="/catalog" class="dropdown-link">
                  Каталог
                  <ul class="dropdown-menu">
                    <li><router-link to="/collection1">Коллекция 1</router-link></li>
                    <li><router-link to="/collection2">Коллекция 2</router-link></li>
                    <li><router-link to="/collection3">Коллекция 3</router-link></li>
                  </ul>
                </router-link>
              <router-link to="/about">О нас</router-link>
          </div>
          <div id="logo-header">
            <img src="@/assets/main-logo.png" alt="main-logo">
          </div>
          <div id="right-header">
            <router-link to="/searchPage">Поиск</router-link>
            <router-link to="/favorites-page">Избранное</router-link>
            <router-link to="/payment-delivery">Корзина</router-link>
          </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
#main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

#left-header, #right-header{
  color: #2a324b;
  font-size: 24px;
  display: flex;
  gap: 10px;
}

#right-header {
  justify-content: flex-end;
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
.dropdown-link:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown-menu li router-link {
  color: white;
  text-decoration: none;
}

</style>
