import Vue from "vue";
import Vuex from "vuex";

import acDuct from "../assets/acDuct.jpg";
import acGas from "../assets/acGas.jpg";
import carAcParts from "../assets/carAcParts.jpg";
import splitAc from "../assets/splitAc.jpg";
import splitAcCompressor from "../assets/splitAcCompressor.png";
import windowAc from "../assets/windowAc.png";
import windowAc2 from "../assets/windowAc2.png";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    topRated: [
      {
        id: 1,
        name: "split Ac",
        price: "10000",
        url: splitAc,
        desc: "Split Ac 1.5 ton for 10 * 20 room",
        rate: 4.1,
      },
      {
        id: 2,
        name: "Window Ac",
        price: "13000",
        url: windowAc,
        desc: "window Ac 1.5 ton for 10 * 20 room cools faster",
        rate: 4.2,
      },
      {
        id: 3,
        name: "Advanced Window Ac",
        price: "15000",
        url: windowAc2,
        desc: "Window Ac 1.5 ton for 10 * 20 room for faster cooling",
        rate: 4.3,
      },
    ],

    allCategories: [
      {
        id: 4,
        name: "Ac Gas",
        price: "10000",
        url: splitAc,
        desc: "Split Ac 1.5 ton for 10 * 20 room",
        rate: 4.1,
      },
      {
        id: 5,
        name: "Window Ac",
        price: "13000",
        url: windowAc,
        desc: "Window Ac 2.0 ton for 20 * 20 room",
        rate: 3.1,
      },
      {
        id: 6,
        name: "AC Gas",
        price: "15000",
        url: acGas,
        desc: "AC gas to fill inside the compressor when ac is not cooling",
        rate: 4.1,
      },
    ],

    acParts: [
      {
        id: 7,
        name: "split Ac Compressor",
        price: "11000",
        url: splitAcCompressor,
        desc: "Split Ac 1.5 ton for 10 * 20 room",
        rate: 4.1,
      },
      {
        id: 8,
        name: "AC Duct",
        price: "12000",
        url: acDuct,
        desc: "Split Ac 1.5 ton for 10 * 20 room",
        rate: 4.2,
      },
      {
        id: 9,
        name: "Car Ac Parts",
        price: "25000",
        url: carAcParts,
        desc: "Car Ac parts when ac is not cooling",
        rate: 3.6,
      },
    ],

    cartItemsCount: 0,
    cartItems: [],
    totalPrice: 0
  },
  getters: {},
  mutations:  {
    increment(state) {
        state.count++
    },
    addToCart(state, payload) {
        let item = payload;
        item = { ...item, quantity: 1 };
        if (state.cartItems.length > 0) {
            let bool = state.cartItems.some(
                i => i.id == item.id
            );
            if (bool == true) {
                let itemIndex = state.cartItems.findIndex(
                    el => el.id == item.id
                );
                state.cartItems[itemIndex]["quantity"] += 1;
            } else {
                state.cartItems.push(item);
            }
        } else {
            state.cartItems.push(item);
        }
        state.cartItemsCount++
    },
    removeItem(state, payload) {
        if (state.cartItems.length > 0) {
            let bool = state.cartItems.some(
                i => i.id == payload.id
            );
            console.log('bool', bool)
            if (bool) {
                let index = state.cartItems.findIndex(
                    el => el.id == payload.id
                );
                //to prevent quantity from being negative
                state.cartItems[index]["quantity"] === 0
                    ? (state.cartItems[index]["quantity"] = 0)
                    : (state.cartItems[index]["quantity"] -= 1);
                if (state.cartItems[index]["quantity"] === 0)
                    state.cartItems.splice(index, 1)
                if (state.cartItemsCount !== 0)
                    state.cartItemsCount--
            }
        }
    }
},
actions: {
    addToCart: (context, payload) => {
        context.commit('addToCart', payload)
    },
    removeItem: (context, payload) => {
        context.commit('removeItem', payload)
    },
    // increment: (context, payload) => {
    //     setTimeout(() => {
    //         context.commit('increment')
    //     }, 5000)
    // },
},
});
