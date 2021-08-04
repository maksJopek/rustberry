<template>
  <button @click="$ruster.to('/')">Goto test</button>
  <h3>Installed CLI Plugins</h3>
  <ul>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
        target="_blank"
        rel="noopener"
        >typescript</a
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";

@Options({})
export default class HelloWorld extends Vue {
  @Prop({ type: String, default: "Hello" }) msg!: string;

  created() {
    this.$ruster.to("/test");
    console.log(this.$wasm.greet("asayu"));
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
