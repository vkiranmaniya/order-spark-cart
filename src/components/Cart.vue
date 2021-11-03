<template>
  <div class="card cart shadow-sm" :class="{ 'open': visible }">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4>Cart</h4>
        <p>Total {{ total }}$</p>
      </div>
      <div>
        <i class="bi-x-lg btn btn-lg" @click="toggle()"></i>
      </div>
    </div>

    <template v-if="products.length">
      <table class="table">
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }} $</td>
            <td>
              <i class="bi-trash" @click="removeFromCart(product)"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template v-else>
      <div class="text-center" style="padding-top: 30%;">
        <i class="bi-minecart empty-icon" @click="removeFromCart(product)"></i>
        <p><small>You have no product in cart</small></p>
      </div>
    </template> 
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('app')
const { mapGetters: mapCartGetters, mapActions: mapCartActions } = createNamespacedHelpers('cart')
export default {
  name: 'Cart',
  computed: {
    ...mapGetters({
      visible: 'isCartVisible'
    }),
    ...mapCartGetters(['products', 'total'])
  },
  methods: {
    ...mapActions({
      toggle: 'toggleCart'
    }),
    ...mapCartActions({
      removeFromCart: 'remove',
      emptyCart: 'empty'
    })
  }
}
</script>
<style scoped>
  .cart {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    transition: all 0.1s ease-in-out;
    padding: 20px;
  }

  .empty-icon {
    font-size: 2rem;
    line-height: 4rem;
  }

  @media only screen and (max-width: 768px) {
    .cart.open {
      left: 0;
    } 
  }

  @media only screen and (min-width: 992px) {
    .cart.open {
      left: 50%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .cart.open {
      left: 40%;
    }
  }
</style>