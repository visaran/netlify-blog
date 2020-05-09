<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      {{ post }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
})
export default class Home extends Vue {
  get posts() {
    return this.$store.state.blogPosts;
  }
}
</script>

<style></style>
