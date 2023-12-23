
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import CategoryPage from '../components/CategoryPage.vue';
import CatalogPage from '../components/CatalogPage.vue';
import ProductPage from '../components/ProductPage.vue';
import WishList from '../components/WishList.vue';
import AboutUs from '../components/AboutUs.vue';
import ContactUs from '../components/ContactUs.vue';
import UserAccount from '../components/UserAccount.vue';
import PaymentDelivery from '../components/PaymentDelivery.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/category', component: CategoryPage },
  { path: '/catalog', component: CatalogPage },
  { path: '/product', component: ProductPage },
  { path: '/wishlist', component: WishList },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: ContactUs },
  { path: '/account', component: UserAccount },
  { path: '/payment-delivery', component: PaymentDelivery },
  // ... остальные маршруты
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
