<template>
        <div class="d-flex align-center justify-center form-container" v-if="!confirmation">
            <v-col
                cols="12"
                sm="8"
                md="6"
                class="text-center"
            >
                <v-form
                ref="form"
                v-model="blockButton"
                lazy-validation
                >
                    <!-- Primer campo -->
                    <v-text-field
                    v-model="reservation.name"
                    label="Ingresa tu nombre"
                    placeholder="¿Como te llamas?"
                    outlined
                    color="black"
                    :rules="nameRules"
                    required
                    ></v-text-field>
                    <!-- Segundo campo -->
                    <v-text-field
                    v-model="reservation.phone"
                    label="Ingresa tu telefono"
                    placeholder="Te enviaremos un mensaje"
                    outlined
                    color="black"
                    :rules="phoneRules"
                    required
                    ></v-text-field>
                    <!-- Tercer campo -->
                    <v-dialog
                    ref="dialogDate"
                    v-model="modalDate"
                    :return-value.sync="reservation.date"
                    persistent
                    width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            v-model="reservation.date"
                            label="Elije una fecha"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            outlined
                            color="black"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="reservation.date"
                        scrollable
                        locale="es-419"
                        color="black"
                        :min="currentDate"
                        max="2030-01-01"
                        :allowed-dates="allowedDates"
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                            text
                            color="black"
                            @click="modalDate = false"
                            >
                                Cancelar
                            </v-btn>
                            <v-btn
                            text
                            color="black"
                            @click="$refs.dialogDate.save(reservation.date)"
                            >
                                Aceptar
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                    <!-- Cuarto campo -->
                    <v-dialog
                    ref="dialogTime"
                    v-model="modalTime"
                    :return-value.sync="reservation.time"
                    persistent
                    width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            v-model="reservation.time"
                            label="Elije a que hora"
                            prepend-icon=""
                            readonly
                            outlined
                            v-bind="attrs"
                            v-on="on"
                            color="black"
                            ></v-text-field>
                        </template>
                        <v-time-picker
                        v-model="reservation.time"
                        full-width
                        locale="es-419"
                        color="black"
                        format="24hr"
                        min="10:00"
                        max="20:00"
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                            text
                            color="black"
                            @click="modalTime = false"
                            >
                                Cancelar
                            </v-btn>
                            <v-btn
                            text
                            color="black"
                            @click="$refs.dialogTime.save(reservation.time)"
                            >
                                Aceptar
                            </v-btn>
                        </v-time-picker>
                    </v-dialog>
                    <v-btn
                    :disabled="!blockButton"
                    x-large
                    color="black"
                    class="white-text"
                    @click="showConfirmation(); reserveHourAction(); reset();"
                    >
                        Reservar
                    </v-btn>
                </v-form>
            </v-col>
        </div>
        <div class="d-flex align-center justify-center black-background" v-else>
            <img class="image-position" src="~@/assets/reservaCreada10.2.png" alt="Reservacion creada">
        </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data () {
        return {
        nameRules: [
            v => !!v || 'Necesitamos tu nombre para continuar',
        ],
        phoneRules: [
            v => !!v || 'Sin tu telefono no podremos contactarte para confirmar'
        ],
        modalDate: false,
        currentDate: new Date().toISOString().slice(0, 10),
        modalTime: false,
        blockButton: true,
        confirmation: 0
        }
        },
        computed: {
            ...mapState(["reservation"])
        },
        methods: {
            ...mapActions(["reserveHourAction"]),
            showConfirmation() {
                this.confirmation = 1;
            },
            allowedDates: val => new Date(val).getDay() < 5,
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        },
        mounted() {
            this.blockButton = false;
        }
    }
</script>

<style scoped>
    .form-container {
        width: 100%;
        height: 75vh;
    }
    .image-position {
        position: relative;
        top:-11%
    }
    .black-background {
        background-color: black;
        height: 100vh;
    }
    .white-text {
        color: white;
    }
</style>