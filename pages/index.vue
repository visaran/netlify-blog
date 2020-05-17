<template>
  <div>
    <h2 class="h1 text-center font-weight-bold mb-6">Últimos artigos</h2>
    <post-item :post="post" v-for="post in posts" :key="post.id" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PostItem from "@/components/PostItem.vue";

@Component({
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  components: {
    PostItem
  }
})
export default class Home extends Vue {
  get posts() {
    return this.$store.state.blogPosts;
  }
}
</script>

<style lang="scss">

</style>
