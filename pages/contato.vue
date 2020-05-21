<template>
  <div>
    <h1 class="text-center font-weight-bold mb-6">Entre em contato</h1>
    <div class="card-body shadow">
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
