<template>
  <article class="post-content">
    <h1>{{ blogPost.title }}</h1>
    <div v-html="$md.render(blogPost.body)"></div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.slug}.json`)
      };
  }
})
export default class HomeSlug extends Vue {}
</script>

<style lang="scss" scoped></style>
