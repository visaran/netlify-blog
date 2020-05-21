<template>
  <div>
    <h1 class="h1 text-center font-weight-bold mb-6">Artigos</h1>
    <post-item :post="post" v-for="post in posts" :key="post.id" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PostItem from "@/components/PostItem.vue";

@Component({
  head() {
    return {
      title: "Home"
    };
  },
  components: {
    PostItem
  }
})
export default class Blog extends Vue {
  get posts() {
    return this.$store.state.blogPosts;
  }
}
</script>

<style lang="scss"></style>
