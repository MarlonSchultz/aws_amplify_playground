<template>

  <div v-if="!signedIn" class="p-grid">
    <Login v-bind:signedIn="signedIn" />
    <div class="p-col-4 p-offset-4">

      <div class="card p-jc-center">
        <h1 class="p-text-center">Login</h1>
        <form class="p-fluid" v-on:submit.prevent>
          <div class="p-field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope"/>
              <InputText id="name" v-model="username"/>
              <label for="name">EmailAdress*</label>
            </div>
          </div>

          <div class="p-field">
            <div class="p-float-label">
              <Password id="password" v-model="password" toggleMask>   </Password>
              <label for="password">Password*</label>
            </div>
          </div>
          <Button type="submit" @click="signIn" label="Submit" class="p-mt-2"/>
        </form>
      </div>
    </div>
  </div>


  <div v-if="signedIn">
    <h1> logged in</h1>
    <button @click="signOut"> SignOut</button>
  </div>

</template>

<script lang="ts">
import {Auth} from "aws-amplify"
import InputText from "primevue/inputtext";
import Password from 'primevue/password';
import Button from 'primevue/button';
import {defineComponent} from 'vue';
import Login from './components/user/Login.vue'


export default defineComponent({
  name: 'app',
  data() {
    return {
      signedIn: false,
      username: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      Auth.signIn(this.username, this.password)
          .then(() => this.signedIn = true)
          .catch(err => console.log(err));
    },

    signOut() {
      Auth.signOut()
          .then(() => this.signedIn = false)
          .catch(err => console.log(err));
    }
  },
  components: {
    InputText,
    Password,
    Button,
    Login
  }
})
</script>
