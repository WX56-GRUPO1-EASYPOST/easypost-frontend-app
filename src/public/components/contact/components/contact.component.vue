<script>
export default {
  name: "contact",
  data() {

    return {
      message: '',

      //contactListService:new ContactsListService()
    }
  },
  methods: {
    sendMessage() {
      this.messagesList.push(this.message)
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>