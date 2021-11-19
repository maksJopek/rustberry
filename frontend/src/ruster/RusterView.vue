<script lang="ts">
import { h } from 'vue';
import { Options, Vue } from 'vue-property-decorator';
import routes from './routes';

@Options({})
export default class RouterView extends Vue {
  currentRoute = window.location.pathname as keyof typeof routes;

  get ViewComponent() {
    return routes[this.currentRoute];
  }

  render() {
    return h(this.ViewComponent);
  }

  created() {
    window.onpopstate = () => {
      this.currentRoute = window.location.pathname as keyof typeof routes;
    };
  }
}
</script>
