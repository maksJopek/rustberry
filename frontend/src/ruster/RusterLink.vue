<template>
  <a
    :href="href"
    @click.prevent="$ruster.to(href)"
  >
    <slot />
  </a>
</template>
<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';

export default class RusterLink extends Vue {
  @Prop({ type: String, required: true }) href!: string;
}
</script>
<style lang="scss" scoped></style>
