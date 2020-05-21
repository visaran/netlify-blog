<template>
  <div>
    <form
      name="contactus"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contactus" />
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" name="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" name="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea name="message" class="form-control" required></textarea>
      </div>
      <button type="submit" value="Send message">Send</button>
    </form>
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
