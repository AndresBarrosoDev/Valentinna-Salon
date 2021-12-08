<template>
    <v-container
        ><v-row
            ><v-col class="mt-2">
                <h1>En redes sociales</h1>
                <Redes/>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="mt-2">
                <h1>En el mapa</h1>
                <Map />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Redes from "@/components/Redes.vue";
import Map from "@/components/Map.vue";

export default {
  components: {
    Map,
    Redes
  },
};
</script>/