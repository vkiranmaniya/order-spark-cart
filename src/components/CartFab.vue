<template>
  <div class="fab" @click="toggleCart()">
    <i class="bi-cart"></i>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('app')
export default {
  name: 'CartFab',
  methods: {
    ...mapActions(['toggleCart'])
  }
}
</script>
<style scoped>
  .fab {
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    color: white;
    border-radius: 50% !important;
    background-color: rgba(0, 0, 0, .9);
    transition: all 0.2s ease-in-out;
    position: fixed;
    bottom: 25px;
    right: 25px;
    cursor: pointer;
  }

  .fab:hover {
    transform: scale(1.2);
    box-shadow: 8px 8px 16px rgba(0, 0, 0, .2)
  }
</style>