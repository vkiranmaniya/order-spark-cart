<template>
  <div id="app">
    <div class="container">
      <router-view/>
      <cart/>
      <cart-fab />
    </div>
  </div>
</template>
<script>
import Cart from '@/components/Cart.vue'
import CartFab from './components/CartFab.vue'
export default {
  name: 'App',
  components: {
    Cart,
    CartFab,
  },
}
</script>
<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css");
  @import '~bootstrap/dist/css/bootstrap.css'
</style>
