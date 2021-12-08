<template>
  <v-bottom-navigation
    color="black"
    grow
    class="stickToBottom"
  >
    <v-btn to="/">
      <span>Nuestro salón</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn to="/Agenda">
      <span>Agenda tu hora</span>
      <v-icon>mdi-calendar-clock</v-icon>
    </v-btn>

    <v-btn to="/Encuentranos">
      <span>Encuentranos</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
    
  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 'recent' }),
  }
</script>

<style lang="scss" scoped>
.stickToBottom {
  position: fixed;
  bottom: 0;
}
.v-bottom-navigation--fixed {
    position: fixed !important;
}
.v-item-group.v-bottom-navigation .v-btn {
    height: inherit !important;
}
</style>