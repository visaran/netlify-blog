<template>
  <div class="main-content">
    <article class="post-content">
      <h1>{{ blogPost.title }}</h1>
      <div v-html="$md.render(blogPost.body)"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.slug}.json`)
      };
  },
  head() {
    return {
      title: this.blogPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogPost.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.blogPost.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blogPost.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.blogPost.thumbnail
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.blogPost.thumbnail
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.blogPost.title
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
