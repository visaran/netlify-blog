<template>
  <article class="post-item card">
    <nuxt-link
      :to="post.slug"
      class="post-item__img post-item__link"
      :style="{
        backgroundImage: `url(${post.thumbnail})`
      }"
    >
      <h1 class="post-item__title h2">{{ post.title }}</h1>
    </nuxt-link>
    <div class="card-body">
      <p class="card-text">{{ post.description }}</p>
      <nuxt-link :to="post.slug" class="btn btn-secondary" variant="secondary"
        >Continue lendo</nuxt-link
      >
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class PostItem extends Vue {
  @Prop() post!: any;
}
</script>

<style lang="scss" scoped>
.post-item {
  margin-bottom: 40px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__img {
    height: 300px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    padding: 1.25rem;
  }

  &__link {
    color: $gray;
    &:hover {
      text-decoration: none;
    }
  }

  &__title {
    color: $white;
  }
}
</style>
