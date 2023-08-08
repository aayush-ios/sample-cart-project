<template>
  <div class="d-flex cart-outer-div">
    <Header />
    <div class="cart-body">
      <div v-if="totalPrice !== 0" class="container mb-5">
        <h4 class="my-4 my-cart">My Cart</h4>
        <div class="d-flex my-3" style="justify-content: space-between">
          <h4 class="fw-600">Summary</h4>
          <h4 class="fw-600" style="margin-right: 49%">Cart</h4>
        </div>
        <div class="d-flex">
          <div v-show="totalPrice !== 0" class="row" style="width: 50%">
            <div class="col-md-4">
              <h6>Total:</h6>
              <h6>Promo Code:</h6>
              <h6>Shipping:</h6>
              <div class="my-3 line w-120"></div>
              <h6>Subtotal:</h6>
            </div>
            <div class="col-md-4">
              <h6>Rs {{ totalPrice }}</h6>
              <h6>SWEETDISH</h6>
              <h6>Rs 50</h6>
              <div class="my-3 line w-60"></div>
              <h6>Rs {{ totalPrice + 50 }}</h6>
            </div>
          </div>
          <div class="row" style="width: 50%">
            <div style="max-width: 70%" class="col-md-12">
              <ul style="padding: 0">
                <li v-for="items in cartItems" :key="items.id" style="list-style: none">
                  <div class="cart-items">
                    <img
                      :src="items.url"
                      width="50px"
                      height="50px"
                      style="border-radius: 50%"
                    />
                    <h6 class="mt-15">{{ items.name }}</h6>
                    <div class="d-flex mt-10">
                      <button v-on:click="removeItem(items)" class="add" type="button">
                        -
                      </button>
                      <span class="cart-quantity">{{ items.quantity }}</span>
                      <button v-on:click="addToCart(items)" class="remove" type="button">
                        +
                      </button>
                    </div>
                    <h6 class="mt-15">{{ items.price * items.quantity }}</h6>
                  </div>
                  <div class="line"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end" style="width: 80%; margin-top: 2%">
          <button v-on:click="checkout" class="btn btn-primary" type="button">
            Checkout
          </button>
        </div>
      </div>
      <div v-else class="container my-5" style="text-align: center">
        <!-- <img src="../assets/shopping-cart.png" width="200px" /> -->
        <div class="mt-4">
          <h4 class="orange-red fw-600">Your cart is empty</h4>
          <h5 class="darkblue fw-600">
            You can go to home page to view more Carrier AC items.
          </h5>
        </div>
      </div>
    </div>
    <div v-show="showCardModal" class="credit-card-form">
      <h2>Credit Card Payment</h2>
      <form>
        <div class="form-group">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" placeholder="Card number" />
        </div>
        <div class="form-group">
          <label for="card-holder">Card Holder</label>
          <input type="text" id="card-holder" placeholder="Card holder's name" />
        </div>
        <div class="form-row">
          <div class="form-group form-column">
            <label for="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" />
          </div>
          <div class="form-group form-column">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="CVV" />
          </div>
        </div>
        <button type="submit" class="click-button" v-on:click="showLoading(event, this)">
          Pay Now
        </button>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";
import swal from "sweetalert";

export default {
  name: "Cart",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      item: 0,
      showCardModal: false,
    };
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
    removeItem(item) {
      this.$store.dispatch("removeItem", item);
    },
    checkout() {
      this.showCardModal = true;
      // swal("Good job!", "Your order is placed successfully!", "success").then((value) => {
      //   window.location.href = "/cart";
      //   console.log(value);
      // });
    },
    showLoading(event, button) {
      event.preventDefault(); // Prevent form submission

      button.innerHTML = "Processing Payment...";

      setTimeout(function () {
        button.innerHTML = "Payment completed.";
      }, 3000).then(() => {
        swal("Good job!", "Your order is placed successfully!", "success").then(
          (value) => {
            window.location.href = "/cart";
            console.log(value);
          }
        );
      }); // Change to the desired duration in milliseconds
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      return price;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-outer-div {
  flex-direction: column;
  height: 100vh;
}
.cart-body {
  background: #efe9e2;
  flex: 1;
  overflow-y: auto;
}
.cart-quantity {
  display: inline-block;
  padding: 3px 6px;
  width: 46px;
  height: 28px;
  border-radius: 2px;
  background-color: #fff;
  margin: 0 5px;
  text-align: center;
}
.cart-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
}
.my-cart {
  color: orange;
  font-weight: 600;
}
input[type="text"] {
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}
.fw-600 {
  font-weight: 600;
}
.line {
  height: 1px;
  border-bottom: 1px solid black;
}
.w-120 {
  width: 120%;
}
.w-60 {
  width: 60%;
}
.add,
.remove {
  width: 28px;
  height: 28px;
  background: linear-gradient(#fff, #f9f9f9);
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}
.mt-10 {
  margin-top: 10px;
}
.mt-15 {
  margin-top: 15px;
}
.orange-red {
  color: orangered;
}
.darkblue {
  color: darkblue;
}
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Montserrat:wght@600&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #686868;
  align-content: center;
  text-align: center;
}

.credit-card-form {
  margin-top: 10%;
  margin-left: 35%;
  max-width: 400px;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  font-family: "Montserrat", sans-serif;
  background-color: #dbdbdb;
  text-align: center;
  color: #004187;
  align-content: center;
}

.credit-card-form h2 {
  margin-bottom: 10%;
  font-size: 24px;
}

.credit-card-form .form-group {
  margin-bottom: 15px;
}

.credit-card-form label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #004187;
}

.credit-card-form input[type="text"],
.credit-card-form select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 1rem;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
}

.credit-card-form .form-row {
  display: flex;
}

.credit-card-form button[type="submit"] {
  width: 100%;
  padding: 14px;
  background-color: #585858;
  color: #fff;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  font-family: "Montserrat", sans-serif;
}

.credit-card-form button[type="submit"]:hover {
  background-color: #bebebe;
  color: #424242;
  font-family: "Montserrat", sans-serif;
}

.credit-card-form button[type="submit"]:focus {
  outline: none;
  font-family: "Montserrat", sans-serif;
}

p {
  color: white;
  margin-top: 6%;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  margin-bottom: 45px;
  font-size: 70%;
  text-shadow: 0 0 5px #cacaca;
}
</style>
