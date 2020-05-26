<template>
  <div class="home">
    <div class="main-content">
      <div class="card shadow mb-10">
        <div class="card-body">
          <div class="media">
            <div class="media-body">
              <h1 class="title text-pink">{{ pageInfo.title }}</h1>

              <div
                class="post-content"
                v-html="$md.render(pageInfo.content)"
              ></div>
              <nuxt-link to="/contato" class="btn btn-secondary"
                >Quer falar comigo? Entre em contato</nuxt-link
              >
            </div>
            <img
              :src="pageInfo.thumbnail"
              alt="Foto de perfil"
              class="home__photo ml-lg-4 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <b-container>
      <h1 class="h1 text-center font-weight-bold mb-6">Últimos artigos</h1>
      <b-row>
        <b-col lg="4" v-for="post in posts" :key="post.id" class="mb-4 mb-lg-0">
          <post-item :post="post" :small="true" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PostItem from "@/components/PostItem.vue";

@Component({
  head() {
    return {
      title: "Blog",
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
  get pageInfo() {
    return this.$store.state.aboutPage[0];
  }

  get posts() {
    return this.$store.getters["postsOrderedByDate"].slice(0, 3);
  }
}
</script>

<style lang="scss" scoped>
.home {
  .home__photo {
    width: 160px;
    height: 100%;
    max-width: 100%;
    object-fit: contain;

    @include media-breakpoint-up(lg) {
      width: 300px;
    }
  }

  .media {
    align-items: center;
    @include media-breakpoint-down(lg) {
      flex-direction: column;
    }

    .home__photo {
      @include media-breakpoint-down(lg) {
        order: 1;
        margin-bottom: 20px;
      }
    }

    .media-body {
      @include media-breakpoint-down(lg) {
        order: 2;
      }
    }
  }

  .title {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    font-size: 20px;
  }
}
</style>
