<template>
  <div>
    <h1 class="text-center font-weight-bold mb-6">Entre em contato</h1>
    <div class="card-body shadow">
      <div class="text-center mb-5">
        <p class="h4 mb-1">
          <a href="#"
            ><font-awesome-icon color="#403e3e" :icon="['fab', 'whatsapp']"
          /></a>
          (19) 98134-4146
        </p>
        <p class="h4">
          <a href="#"
            ><font-awesome-icon color="#403e3e" :icon="['fas', 'envelope']"
          /></a>
          taissiqueira@adv.oabsp.org.br
        </p>
      </div>
      <form
        name="contactus"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contactus" />
        <div class="form-group">
          <label for="name">Nome:</label>
          <input type="text" class="form-control" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" name="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="message">Mensagem:</label>
          <textarea name="message" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-secondary" value="Send message">
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PostItem from "@/components/PostItem.vue";

@Component({
  head() {
    return {
      title: "Home"
    };
  },
  components: {
    PostItem
  }
})
export default class Blog extends Vue {
  get posts() {
    return this.$store.state.blogPosts;
  }
}
</script>

<style lang="scss"></style>
