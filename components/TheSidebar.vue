<template>
  <aside class="sidebar" :class="{ active: isSidebarActive }">
    <b-avatar
      variant=""
      src="https://placekitten.com/300/300"
      size="150"
      class="mb-4"
      href="/"
    ></b-avatar>
    <h2 class="h4 mb-2 font-weight-bold">Taís Camargo Siqueira</h2>
    <p class="mb-2">
      Advogada formada pela UNIFEOB e pós-graduanda em Direito Empresarial pela
      Faculdade Legale.
    </p>
    <p class="mb-6"><strong>OAB/SP n°439.137</strong></p>

    <h4 class="h5">Redes sociais:</h4>
    <ul class="list-inline">
      <li class="list-inline-item">
        <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
      </li>
      <li class="list-inline-item">
        <a href="#"><font-awesome-icon :icon="['fab', 'facebook']"/></a>
      </li>
      <li class="list-inline-item">
        <a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class TheSidebar extends Vue {
  @Prop() isSidebarActive!: boolean;
  drawer: boolean = true;

  mounted() {
    console.log(this.isSidebarActive);
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 320px;
  text-align: center;
  padding: 20px;
  background-color: $gray;
  color: $white;
  transform: translateX(-100%);
  z-index: 10;
  transition: transform 0.3s ease-in;

  &.active {
    transform: translateX(0);
  }

  @include media-breakpoint-up(lg) {
    transform: translateX(0);
  }
}
</style>
