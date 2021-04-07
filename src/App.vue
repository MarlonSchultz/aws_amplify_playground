<template>
<div class="hello">
<div v-if="!signedIn">
  <input v-model='username' type='text' name="username" placeholder="Login">
  <input v-model='password' type='password' name="password" placeholder="Password">
  <button @click="signIn"> SignIn </button>
</div></div>
<div v-if="signedIn">
 <button @click="signOut"> SignOut </button>
</div>
</template>

<script lang="ts">
import { Auth } from "aws-amplify"

export default {



  name: 'app',
 data() {
    return {
      signedIn: false,
      username: 'username',
      password: null,
      value: 'Hello World'  

    }
 },
 methods:{
   signIn(){
     Auth.signIn(this.username, this.password)
       .then(this.signedIn = true)
       .catch(err => console.log(err));
   },

    signOut(){
     Auth.signOut()
       .then(this.signedIn = false)
       .catch(err => console.log(err));(this.username, this.password)
   }
 }

 }


 
</script>

<style>
body {
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.signout {
  background-color: #ededed;
  margin: 0;
  padding: 11px 0px 1px;
}
</style>