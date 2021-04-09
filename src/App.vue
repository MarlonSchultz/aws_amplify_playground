<template>

  <div v-if="!userIsSignedIn" class="p-grid">
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
              <Password id="password" v-model="password" toggleMask></Password>
              <label for="password">Password*</label>
            </div>
          </div>
          <Button type="submit" @click="signIn" label="Submit" class="p-mt-2"/>
        </form>
      </div>
    </div>
  </div>


  <div v-if="userIsSignedIn">
    <h1> logged in</h1>
    <button @click="signOut"> SignOut</button>
  </div>

</template>

<script lang="ts">
import {Auth} from "aws-amplify"
import InputText from "primevue/inputtext";
import Password from 'primevue/password';
import Button from 'primevue/button';
import {Options, Vue} from "vue-class-component";

@Options({
  components: {
    InputText,
    Password,
    Button
  },

  data() {
    return {
      signedIn: false,
      username: '',
      password: ''
    }
  },
})

export default class App extends Vue {

  username: string = '';
  password: string = '';
  userIsSignedIn: boolean = false

  signIn = async () => {
    try {
      await Auth.signIn(this.username, this.password);
      this.userIsSignedIn = true;
    } catch (err) {
      console.log(err);
    }
  };

  signOut = async () => {
    try {
      await Auth.signOut();
      this.userIsSignedIn = false;
    } catch (err) {
      console.log(err);
    }
  }
}
</script>
