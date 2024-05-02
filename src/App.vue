<script>
import Footer from "./public/components/footer.component.vue";
import Toolbar from "./public/components/toolbar.component.vue";
export default {
  components: {
    Toolbar,Footer
  },
  computed: {
    shouldShowToolbar() {

      return this.$route.path !== "/login" && this.$route.path !== "/register-company";
    },
    shouldShowFooter() {
      return this.$route.path !== "/login" && this.$route.path !== "/register-company";
    }
  }
}
</script>
<template>
  <Toolbar v-if="shouldShowToolbar"/>
  <router-view></router-view>
  <Footer v-if="shouldShowFooter"/>
</template>