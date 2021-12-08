<template>
    <v-data-table
    :headers="headers"
    :items="reservationList"
    :items-per-page="10"
    class="elevation-4"
    ></v-data-table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
        headers: [
            { text: "Nombre", value: "name" },
            { text: "Telefono", value: "phone" },
            { text: "Fecha reserva", value: "date" },
            { text: "Hora reserva", value: "time" },
            { text: "Creacion de registro", value: "creation" },
        ],
        };
    },
    computed: {
        ...mapState(["reservationList"]),
    },
    methods: {
        ...mapActions(["showReservationsAction"]),
    },
    mounted() {
        this.showReservationsAction();
    },
};
</script>