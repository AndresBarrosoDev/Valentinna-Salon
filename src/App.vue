<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view />
    </v-main>
    <NavBar/>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue"
import NavBar from "@/components/NavBar.vue"
export default {
  name: "App",
  components: {
    Header,
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
