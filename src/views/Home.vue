<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div
      v-for="product in $options.products"
      :key="product.id"
      class="col" 
    >
      <product v-bind="product" @add="addToCart(product)"/>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Product from '@/components/Product.vue'
import products from '@/stub/products.stub'
const { mapActions } = createNamespacedHelpers('cart')
export default {
  products,
  name: 'Home',
  components: {
    Product,
  },
  methods: {
    ...mapActions({
      addToCart: 'add'
    })
  }
}
</script>
