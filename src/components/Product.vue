<template>
  <div class="card shadow-sm">
    <img class="bd-placeholder-img card-img-top" :src="image" alt=""/>
    
    <div class="card-body">
      <h6>{{ name }}</h6>
      <p class="card-text">
        {{ description }}
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <h5>{{ price }} $</h5>
        <div class="btn-group">
          <button type="button" class="btn btn-outline-secondary" @click="$emit('add')">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['image', 'name', 'price', 'description']
}
</script>

<style scoped>
  p.card-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>