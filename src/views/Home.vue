<template>
  <div class="first-container">
    <ValentinnaSalonBanner/>
  </div>
</template>

<script>
import ValentinnaSalonBanner from '@/components/ValentinnaSalonBanner.vue'
export default {
  name: "Home",

  components: {
    ValentinnaSalonBanner
  },
  
};
</script>

<style lang="scss">
.first-container {
    background-color: gray;
    // background-image: url("~@/assets/salon.png");
    // background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url("~@/assets/salon.jpg");
    // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/salon.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 80%;
    width: 100%;
    height: 100vh;
}
</style>
