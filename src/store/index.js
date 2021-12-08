import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservation: {
      name: "",
      phone: "",
      date: "",
      time: ""
    },
    reservationList: []
  },
  mutations: {
    reserveHour(state) {
      let reservationObject = {
        name: state.reservation.name,
        phone: state.reservation.phone,
        date: state.reservation.date, 
        time: state.reservation.time,
        creationDate: new Date().toLocaleDateString(),
        creationTime: new Date().toLocaleTimeString() 
      }
      firebase.database().ref("Reservations").push(reservationObject);
      console.log(reservationObject)
    },
    showReservations(state) {
      const FBreservationList = firebase.database().ref("Reservations");

      FBreservationList.on("value", (snapshot) => {
        let tempReservation = snapshot.val();
        let tempReservationList = [];
        Object.keys(tempReservation).forEach((key) => {
          tempReservationList.push({
            id: key, 
            name: tempReservation[key].name,
            phone: tempReservation[key].phone,
            date: tempReservation[key].date,
            time: tempReservation[key].time,
            creation: tempReservation[key].creationDate + " a las " + tempReservation[key].creationTime
          });
        });
        state.reservationList = tempReservationList;
      })

    }
  },
  actions: {
    reserveHourAction(context) {
      context.commit("reserveHour")
    },
    showReservationsAction(context) {
      context.commit("showReservations")
    }
  },
  modules: {},
});
