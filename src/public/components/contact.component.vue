<script>
import {ContactEntity} from "../model/contact.entity.js";

export default {
  name: "contact",
  props:{
    /*contact: {required: true}*/
    contact:ContactEntity,
    open:{default: false},
  },
  methods:{
  }
}
</script>

<template>
<!--  <pv-card @click="$emit('currentContact',contact)">-->
  <pv-card @click="$emit('currentContact',{param1:contact,param2:true})">
    <template #title>{{contact.name}}</template>
    <template #content>
      <img :src="contact.urlToImage" :alt="contact.name" class="contact-image">
    </template>
  </pv-card>
</template>

<style scoped>
.contact-image{
  width: 30px;
  height:auto;
}
</style>