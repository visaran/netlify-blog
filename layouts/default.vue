<template>
  <div>
    <the-sidebar />
    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import TheSidebar from "@/components/TheSidebar.vue";

@Component({
  components: {
    TheSidebar
  }
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
.main-content {
  padding: 40px 30px 0;
  max-width: 800px;
  margin: 0 auto;
}
</style>
