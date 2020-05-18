<template>
  <aside class="sidebar" :class="{ active: isActive }">
    <a href="/">
      <img src="~/assets/images/logo.jpeg" class="sidebar__logo" alt="" />
    </a>
    <h2 class="h3 mb-8 font-weight-bold">Taís Camargo Siqueira</h2>
    <p class="h4 mb-1">
      <a href="#"><font-awesome-icon :icon="['fab', 'whatsapp']"/></a>
      (19) 98134-4146
    </p>
    <p class="h4">
      <a href="#"><font-awesome-icon :icon="['fas', 'envelope']"/></a>
      taissiqueira@adv.oabsp.org.br
    </p>

    <ul class="menu ">
      <li class="">
        <nuxt-link to="/" @click.native="closeMenu">Início</nuxt-link>
      </li>
      <li class="">
        <nuxt-link to="/blog" @click.native="closeMenu">Blog</nuxt-link>
      </li>
    </ul>

    <h4 class="h4">Redes sociais:</h4>
    <ul class="list-inline">
      <li class="list-inline-item">
        <a
          href="https://www.linkedin.com/in/ta%C3%ADs-camargo-siqueira-374160138/"
          target="_blank"
          ><font-awesome-icon :icon="['fab', 'linkedin']"
        /></a>
      </li>
      <li class="list-inline-item">
        <a href="https://www.facebook.com/taissiqueiraadv/" target="_blank"
          ><font-awesome-icon :icon="['fab', 'facebook']"
        /></a>
      </li>
      <li class="list-inline-item">
        <a href="https://www.instagram.com/taissiqueiraadv/" target="_blank"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";

@Component({})
export default class TheSidebar extends Vue {
  @Prop() isSidebarActive!: boolean;

  closeMenu() {
    this.$emit("closed", false);
  }

  get isActive() {
    if (this.isSidebarActive) {
      return true;
    } else {
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
  text-align: center;
  padding: 20px;
  background-color: $gray;
  color: $white;
  transform: translateX(-100%);
  z-index: 10;
  transition: transform 0.3s ease-in;
  box-shadow: 1px -9px 10px rgba(0, 0, 0, 0.5);

  &.active {
    transform: translateX(0);
  }

  @include media-breakpoint-up(lg) {
    transform: translateX(0);
    width: 320px;
  }

  &__logo {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 3px solid $pink;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  .menu {
    font-size: 22px;
    list-style: none;
    padding-left: 0;
    margin: 40px 0;
  }
}
</style>
