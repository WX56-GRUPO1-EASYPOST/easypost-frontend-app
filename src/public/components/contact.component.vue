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
  <pv-card @click="$emit('currentContact',{param1:contact,param2:true})"  class="item-contact-card">
    <template #title><h5>{{contact.name}}</h5></template>
    <template #content>
      <img :src="contact.urlToImage" :alt="contact.name" class="contact-image">
    </template>
  </pv-card>
</template>

<style scoped>
.item-contact-card{
  margin-bottom: 15px;
}
.item-contact-card h5{
  margin:0;
}
.item-contact-card:hover{
  cursor: pointer;
  background-color: lightgray;
  border: 1px solid black;
}
.contact-image{
  width: 30px;
  height:auto;
}
@media screen and (max-width: 520px){
  .item-contact-card{
    margin-bottom: 0;
    margin-right: 10px;
    width: 100%;
    height: auto;
    font-size: 8px;
  }
  .item-contact-card h5{
    font-size: 10px;
  }
  .contact-image{
    width: 20px;
    height:auto;
  }
}
</style>