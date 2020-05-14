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
    console.log(params.slug);
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.slug}.json`)
      };
  }
})
export default class HomeSlug extends Vue {}
</script>

<style lang="scss" scoped>
.post-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 20px;

    &:first-child {
      margin-top: 0;
    }
  }
  p {
    text-align: justify;
  }
}
</style>
