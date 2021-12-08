<template>
    <v-card 
    class="map-responsive"
    elevation="10"
    >
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.167997697012!2d-70.65650658523474!3d-33.4970060072883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662db73903203dd%3A0x63da20ec0826901f!2sValentinna%20Sal%C3%B3n!5e0!3m2!1ses-419!2scl!4v1623977582687!5m2!1ses-419!2scl"
            width="350"
            height="700"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
        ></iframe>
    </v-card>
</template>

<script>
export default {
  name: "Map",
};
</script>

<style lang="scss" scoped>
.map-responsive {
    overflow: hidden;
    padding-bottom: 70%;
    position: relative;
    height: 0;
    border: 1px solid gold;
    border-radius: 5px;
}
.map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
}
</style>

