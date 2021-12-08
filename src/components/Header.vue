<template>
    <v-app-bar
        app
        color="black"
        dark
    >
        <div class="d-flex align-center">
            <SVGImage name="logo"/>
            <!-- <v-img
            alt="VB"
            class="shrink mr-2"
            contain
            src="@/assets/VS.png"
            transition="scale-transition"
            width="70"
            /> -->
        </div>

        <v-spacer></v-spacer>

        <div>
            <v-img
            alt="Valentinna Salón Integral"
            class="shrink mt-1"
            contain
            min-width="170"
            src="@/assets/valentinna-salon.png"
            width="100"
            />
        </div>
    </v-app-bar>
</template>

<script>
import SVGImage from '@/components/SVGImage.vue'
export default {
    components: {
        SVGImage
    }
}
</script>
