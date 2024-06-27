<script>
import Footer from "./shared/components/footer.component.vue";
import ToolbarContent from "./shared/components/toolbar-content.component.vue";

export default {
  components: {
    ToolbarContent,
    Footer
  },
  computed: {
    shouldShow() {
      if(this.$route.name==='pageNotFound'){
        return false;
      }
      return this.$route.path !== "/login" && this.$route.path !== "/register";
    }
  }
}
</script>
<template>

  <Toolbar-Content v-if="shouldShow"></Toolbar-Content>
  <body>
  <router-view></router-view>
  </body>

  <Footer v-if="shouldShow"></Footer>

</template>

<style>

body
{
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
}

</style>