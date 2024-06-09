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
      return this.$route.path !== "/login" && this.$route.path !== "/register-company";
    }
  }
}
</script>
<template>

  <Toolbar-Content v-if="shouldShow"></Toolbar-Content>
  <router-view></router-view>
  <Footer v-if="shouldShow"></Footer>

</template>

<style>


</style>