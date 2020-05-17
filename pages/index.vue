<template>
  <div class="home">
    <div class="media">
      <div class="media-body">
        <h1 class="title">{{ pageInfo.title }}</h1>
        <div class="post-content" v-html="$md.render(pageInfo.content)"></div>
        <p></p>
        <p><strong>OAB/SP n°439.137</strong></p>
      </div>
      <img
        :src="pageInfo.thumbnail"
        alt="Foto de perfil"
        class="home__photo ml-lg-4 mx-auto"
      />
    </div>
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
  get pageInfo() {
    return this.$store.state.aboutPage[0];
  }
}
</script>

<style lang="scss" scoped>
.home {
  .home__photo {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  .media {
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
