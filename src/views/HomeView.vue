<template>
  
<button @click="getFruits()">Get Fruits</button>

</template>

<script>
// @ is an alias to /src
export default{
    methods: {
        getFruits(){
            this.$store.dispatch('getFruits')
        }
    }
}
</script>
