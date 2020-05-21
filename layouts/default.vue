<template>
  <div>
    <the-sidebar :isSidebarActive="isSidebarActive" @closed="onClose" />

    <header class="header">
      <nuxt-link to="/">
        <img src="~/assets/images/logo.jpeg" class="header__logo" alt="Logo" />
      </nuxt-link>
      <button
        class="btn btn-reset p-5 d-block d-lg-none ml-auto"
        @click="toggleMenu"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </header>

    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TheSidebar from "@/components/TheSidebar.vue";

@Component({
  components: {
    TheSidebar
  }
})
export default class Default extends Vue {
  isSidebarActive: boolean = false;

  toggleMenu() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  onClose(value: any) {
    this.isSidebarActive = value;
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  padding: 40px 15px;
  max-width: 800px;
  margin: 0 auto;

  @include media-breakpoint-up(lg) {
    padding: 40px 30px;
  }
}

.header {
  background: $pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);

  @include media-breakpoint-up(lg) {
    display: none;
  }

  &__logo {
    max-width: 50px;
    border-radius: 50%;
  }
}
</style>
