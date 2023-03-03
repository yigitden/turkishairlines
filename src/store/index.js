import Vuex from "vuex";
import jsonData from "../api/data.json";

const airports = JSON.parse(JSON.stringify(jsonData.flights));
const store = new Vuex.Store({
    state: {
        airports,
        form: [],
        isPassedFirstStep: false,
        flightStatus: null,
        paymentPrice: null
    },
    mutations: {
        updateForm (state,form) {
            state.form = form
        },
        updateStep(state, newValue) {
            state.isPassedFirstStep = newValue
        },
        updateFlightStatus(state,newState) {
            state.flightStatus = newState
        },
        updatePaymentPrice(state,newPrice) {
            state.paymentPrice = newPrice
        }
    },
    actions: {
    },
    getters: {
        getFlights(state) {
            return state.airports;
        },
        getForm(state) {
            return state.form
        },
        getStep(state) {
            return state.isPassedFirstStep
        },
        getFlightStatus(state){
            return state.flightStatus
        },
        getPaymentPrice(state){
            return state.paymentPrice
        }
    },
});
export default store;
