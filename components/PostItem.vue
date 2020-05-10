<template>
  <article class="post-item card">
    <nuxt-link to="/blog" class="post-item__link">
      <div
        class="post-item__img"
        :style="{
          backgroundImage: `url(https://cdn.vuetifyjs.com/images/cards/docks.jpg)`
        }"
      >
        <h1 class="post-item__title h2">{{ post.title }}</h1>
      </div>
      <div class="card-body">
        <p class="card-text">{{ post.description }}</p>
        <b-button href="#" variant="secondary">Veja mais</b-button>
      </div>
    </nuxt-link>
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
