<template>
  <img
    alt="Vue logo"
    src="assets/logo.png"
  >
  <h1>Hello Vue + Wasm</h1>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Docs
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Docs</a>
  </p>

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button><br><br>
  <button
    type="button"
    @click="$ruster.to('/test')"
  >
    Test ruster
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class HelloWorld extends Vue {
  count = 0;
  created() {
    console.log(this.$ruster, this.$wasm);
  }
}
</script>
<style lang="scss" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
