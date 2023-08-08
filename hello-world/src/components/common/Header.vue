<template>
  <header>
    <div class="header">
      <div v-on:click="goTo('home')" class="logo">
        <h4 class="sweet">Dealer Portal</h4>
        <img
          src="../../assets/carrier-logo.png"
          width="45px"
          height="45px"
          style="margin-left: 10px"
        />
      </div>
      <div
        class="d-flex"
        style="width: 300px; justify-content: space-evenly; padding-top: 3px"
      >
        <i v-on:click="goTo('cart')" class="fa fa-shopping-cart cart-icon"></i>
        <span class="cart-count">{{ count }}</span>

        <h5 class="login">Login</h5>
        <h5 class="register">Sign Up</h5>
        <router-link to="/home"><h5 class="register">Products</h5></router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    count() {
      return this.$store.state.cartItemsCount;
    },
  },
  methods: {
    goTo(page) {
      page === "home" ? this.$router.push("/") : this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background-color: #e2e1e2;
  display: flex;
  justify-content: space-between;
}
.logo {
  display: flex;
  margin-left: 15px;
  padding: 6px;
  cursor: pointer;
}
.sweet {
  color: deeppink;
  font-weight: 600;
  margin-top: 7px;
}

.cart-count {
  font-size: 15px;
  color: #004187;
  padding: 0 5px;
  margin-left: -35px;
  background: white;
  height: 20px;
  border-radius: 50%;
  width: 20px;
}

.cart {
  width: 300px;
  justify-content: space-evenly;
  padding-top: 3px;
}

.cart-icon {
  line-height: 45px;
  font-size: 24px;
  cursor: pointer;
  color: #004187;
}

.login,
.register {
  font-weight: 600;
  margin-top: 10px;
  color: #004187;
}
</style>
