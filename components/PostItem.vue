<template>
  <article class="post-item card shadow" :class="{ sm: small }">
    <nuxt-link
      :to="`/blog/${post.slug}`"
      class="post-item__img post-item__link"
      :style="{
        backgroundImage: `url(${post.thumbnail})`,
      }"
    >
      <h1 class="post-item__title h1">{{ post.title }}</h1>
    </nuxt-link>
    <div class="card-body">
      <p class="post-item__text">{{ post.description }}</p>
      <nuxt-link
        :to="`/blog/${post.slug}`"
        class="btn btn-lg btn-secondary"
        variant="secondary"
        >Continue lendo</nuxt-link
      >
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import removeAccents from "remove-accents";

@Component({})
export default class PostItem extends Vue {
  @Prop() post!: any;
  @Prop() small!: any;

  get normalizedSlug() {
    return removeAccents(this.post.slug);
  }
}
</script>

<style lang="scss" scoped>
.post-item {
  margin-bottom: 40px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &.sm {
    .post-item__title {
      font-size: 1.7rem;
    }

    .post-item__text {
      font-size: 18px;
      min-height: 180px;
    }
  }

  &__img {
    min-height: 220px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    padding: 1.25rem;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;

    @include media-breakpoint-up(lg) {
      min-height: 300px;
    }
  }

  &__link {
    color: $gray;
    &:hover {
      text-decoration: none;
    }
  }

  &__title {
    color: $white;
    text-shadow: 2px 2px 5px #000;
    font-weight: bold;
  }

  &__text {
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
