<template>
    <div class="fruit-cards">
      <div v-for="fruit in fruits" :key="fruit.id" class="fruit-card" :id="`fruit-card-${fruit.id}`">
        <h2>{{ fruit.fruit_name }}</h2>
        <p>Weight: {{ fruit.weight }} kg</p>
        <p>Amount: {{ fruit.amount }} pieces</p>
        <button v-if="$cookies.get('token')" @click="addToCart(fruit.id)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      fruits() {
        return this.$store.state.fruits
      }
    },
    methods: {
      addToCart(fruit_id) {
        this.$store.dispatch('addToCart', fruit_id)
      }
    }
  }
  </script>
  
  <style scoped>
  .fruit-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .fruit-card {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 250px;
  }
  
  h2 {
    margin-top: 0;
  }
  
  button {
    background-color: rgb(194, 167, 17);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3e8e41;
  }
  </style>




<!-- <template>
    <div>
        <section v-for="fruit in $store .state.fruits" :key="fruit.id"> {{ id.fruits }} {{ fruit.fruit_name }} {{ fruit.weight }} {{ fruit.amount }}</section>
        <button @click="addToCart()">Purchase</button>
    </div>
</template>
<script>
export default {
     methods:{
        getFruits(){
           this.$store.dispatch('getFruits')
        },
    addToCart(){
           this.$store.dispatch('addToCart')
        }
    }
}

</script>
<style>
    
</style> -->