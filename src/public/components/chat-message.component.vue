<script>
import {MessageEntity} from "../model/message.entity.js";

export default {
  name: "chat-message",
  props: {
    message: MessageEntity
  }
}
</script>

<template>
  <p class="auto-width">{{ message.content }}</p>
</template>

<style scoped>
.auto-width {
  display: inline-block;
  background-color: lightblue;
  padding: 5px;
  border: none;
  border-radius: 8px;
}
</style>