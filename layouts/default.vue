<template>
  <div>
    <the-sidebar :isSidebarActive="isSidebarActive" @closed="onClose" />
    <button
      class="btn btn-reset p-5 d-block d-lg-none ml-auto"
      @click="toggleMenu"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
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
</style>
