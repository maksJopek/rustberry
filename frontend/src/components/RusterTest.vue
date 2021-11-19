<template>
  <img
    alt="Vue logo"
    src="assets/logo.png"
  >
  <h1>Hello Vue + Wasm</h1>

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button><br><br>
  <button
    type="button"
    @click="wasmAlert()"
  >
    Call wasm
  </button><br><br>
  <button
    type="button"
    @click="$ruster.to('/')"
  >
    Go back
  </button>
  <p>
    Edit
    <code>components/RusterTest.vue</code> to test hot module replacement.
  </p>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-property-decorator';

@Options({})
export default class HelloWorld extends Vue {
  count = 0;
  wasmAlert() {
    this.$wasm.greet('Sir');
  }
}
</script>
<style lang="scss" >
body {
    background-color: #001e38;
    color: white;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #a8a8a8;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
