<template>
  <div v-if="!signedIn">

    <div class="p-d-flex p-jc-center">

          <div class="card">
            <h1 class="p-text-center">Login</h1>
            <form>
              <div class="p-field">
                <div class="p-float-label p-input-icon-right">
                  <i class="pi pi-envelope"/>
                  <InputText id="name" v-model="username"/>
                  <label for="name">EmailAdress*</label>
                </div>
              </div>

              <div class="p-field">
                <div class="p-float-label">
                  <Password id="password" v-model="password" toggleMask>
                    <template #header>
                      <h6>Pick a password</h6>
                    </template>
                    <template #footer="sp">
                      {{ sp.level }}
                      <Divider/>
                      <p class="p-mt-2">Suggestions</p>
                      <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                        <li>At least one lowercase</li>
                        <li>At least one uppercase</li>
                        <li>At least one numeric</li>
                        <li>Minimum 8 characters</li>
                      </ul>
                    </template>
                  </Password>
                  <label for="password">Password*</label>
                </div>
              </div>
              <Button type="submit" label="Submit" class="p-mt-2"/>
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
import Divider from "primevue/divider";


export default {
  name: 'app',
  data() {
    return {
      signedIn: false,
      username: null,
      password: null,
      value: 'Hello World'
    }
  },
  methods: {
    signIn() {
      Auth.signIn(this.username, this.password)
          .then(this.signedIn = true)
          .catch(err => console.log(err));
    },

    signOut() {
      Auth.signOut()
          .then(this.signedIn = false)
          .catch(err => console.log(err));
      (this.username, this.password)
    }
  },
  components: {
    InputText, Password, Button, Divider
  }
}
</script>
