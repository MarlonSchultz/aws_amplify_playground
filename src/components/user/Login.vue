<template>
<div v-if="signedIn">
  <h1>Logged in {{signedIn}}</h1>
</div>
  <div v-if="!signedIn">
    <h1>not Logged in</h1>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    signedIn: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
