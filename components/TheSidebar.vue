<template> </template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class TheSidebar extends Vue {
  drawer: boolean = true;
}
</script>

<style lang="scss" scoped>
/* .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 20%;
  text-align: center;
  padding-top: 20px;
} */
</style>
