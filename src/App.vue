<script>
import Footer from "./shared/components/footer.component.vue";
import ToolbarContent from "./shared/components/toolbar-content.component.vue";
export default {
  components: {
    ToolbarContent,
    Footer
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
  <Toolbar-Content v-if="shouldShowToolbar"/>
  <router-view></router-view>
  <Footer v-if="shouldShowFooter"/>
</template>