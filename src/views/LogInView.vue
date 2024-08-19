<template>
    <div>
        <button @click="signUp = !signUp">SignUp / Login</button>
        <div v-if="signUp">
            <h1>Register</h1>
        <br><br>
        <table>
            <tr><th><label>Enter name: </label></th><td><input type="text" v-model="name"></td></tr>
            <tr><th><label>Enter surname: </label></th><td><input type="text" v-model="surname"></td></tr>
            <tr><th><label>Enter age: </label></th><td><input type="number" v-model="age"></td></tr>
            <tr><th><label>Enter Favourite Coding Langauge: </label></th><td><input type="text" v-model="fav_coding_lang"></td></tr>
            <tr><th><label>Enter Favourite Car: </label></th><td><input type="text" v-model="fav_car"></td></tr>
            <tr><th><label>Enter Eye Color: </label></th><td><input type="text" v-model="eye_color"></td></tr>
            <tr><th><label>Enter Username: </label></th><td><input type="text" v-model="username"></td></tr>
            <tr><th><label>Enter Password: </label></th><td><input type="password" v-model="password"></td></tr>
            <tr><td colspan="2"><input @click="addUser" type="button" value="enter"></td></tr>
        </table>
        </div>
        <div v-else>
            <h1>Log In</h1>
            <table>
            <tr><th><label>Enter Username: </label></th><td><input type="text" v-model="username"></td></tr>
            <tr><th><label>Enter Password: </label></th><td><input type="password" v-model="password"></td></tr>
            <tr><td colspan="2"><input @click="loginUser" type="button" value="enter"></td></tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name: '',
            surname:'',
            age: '',
            fav_coding_lang: '',
            fav_car: '',
            eye_color: '',
            username:'',
            password:'',
            signUp:'true'
        }
    },
    computed:{
        addUser(){
            this.$store.dispatch('addUser',this.$data)
        },
        loginUser(){
            this.$store.dispatch('loginUser',{username:this.username,password:this.password})
            location.reload()
        }
    }
}
</script>
<style>
</style>







