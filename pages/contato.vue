<template>
  <div class="main-content">
    <h1 class="text-center font-weight-bold mb-6">Entre em contato</h1>
    <div class="card-body shadow">
      <div class="text-center mb-5">
        <a
          class="text-gray h4 d-block"
          href="https://wa.me/message/MFFND5JIZ3EFH1"
          target="_blank"
          ><font-awesome-icon color="#403e3e" :icon="['fab', 'whatsapp']" />
          (19) 99145-1509</a
        >

        <a
          href="mailto: taissiqueira@adv.oabsp.org.br"
          class="text-gray h4 d-block"
          ><font-awesome-icon color="#403e3e" :icon="['fas', 'envelope']" />
          taissiqueira@adv.oabsp.org.br</a
        >
      </div>
      <form
        name="contactus"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contactus" />
        <div class="form-group">
          <label for="name">Nome:</label>
          <input
            type="text"
            class="form-control"
            v-model="form.name"
            @input="ev => (form.name = ev.target.value)"
            name="name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            class="form-control"
            v-model="form.email"
            @input="ev => (form.email = ev.target.value)"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Mensagem:</label>
          <textarea
            name="message"
            class="form-control"
            v-model="form.message"
            @input="ev => (form.message = ev.target.value)"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-secondary" value="Enviar">
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PostItem from "@/components/PostItem.vue";
import axios from "axios";

@Component({
  head() {
    return {
      title: "Contato"
    };
  },
  components: {}
})
export default class Blog extends Vue {
  form = {
    name: "",
    email: "",
    message: ""
  };

  encode(data: any) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
  }

  handleSubmit() {
    const axiosConfig: any = {
      header: { "Content-Type": "application/x-www-form-urlencoded" }
    };
    axios
      .post(
        "/",
        this.encode({
          "form-name": "contactus",
          ...this.form
        }),
        axiosConfig
      )
      .then(() => {
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
        alert("Obrigado! Sua mensagem foi enviada com sucesso!");
      });
  }
}
</script>

<style lang="scss"></style>
