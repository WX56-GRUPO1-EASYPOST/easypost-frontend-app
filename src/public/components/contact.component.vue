<script>
import {ContactEntity} from "../model/contact.entity.js";

export default {
  name: "contact",
  props:{
    contact:ContactEntity
  },
  methods:{

  }
}
</script>

<template>
  <pv-card @click="$emit('currentContact',contact.id)">
    <template #title>{{contact.contactName}}</template>
    <template #content>
      <img :src="contact.urlToImage" :alt="contact.contactName" class="contact-image">
    </template>
  </pv-card>
</template>

<style scoped>
.contact-image{
  width: 30px;
  height:auto;
}
</style>