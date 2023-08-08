<template>
  <div class="d-flex food-details-outer">
    <Header />
    <div class="food-details">
      <div class="container mb-5">
        <div class="container mb-5">
          <h4 class="my-4 fw-600">Add Item to cart</h4>
          <div class="row">
            <div class="col-md-4" style="cursor: pointer">
              <img
                :src="details.url"
                width="300px"
                height="300px"
                style="border-radius: 15px"
              />
            </div>
            <div class="col-md-4" style="cursor: pointer">
              <h5 class="my-4 fw-600">Name: {{ details.name }}</h5>
              <h5 class="my-4 fw-600">Price: {{ details.price }}</h5>
              <h5 class="my-4 fw-600">Description: {{ details.desc }}</h5>
              <h5 class="my-4 fw-600">Rating: {{ details.rate }} *</h5>
              <div>
                <button v-on:click="goToCart" class="btn btn-primary my-2 mx-2">
                  Go to Cart
                </button>
                <button v-on:click="addToCart" class="btn btn-success mx-2">
                  Add Item
                </button>
                <button v-on:click="removeItem" class="btn btn-danger mx-2">
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default {
  name: "AcDetails",
  components: { Header, Footer },
  data() {
    return {
      details: this.$route.params,
    };
  },
  created() {
    if (this.$route.params.id !== undefined) {
      localStorage.setItem("details", JSON.stringify(this.$route.params));
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    addToCart() {
      // this.$store.commit("addToCart");
      this.$store.dispatch("addToCart", this.details);
      console.log("this.$store", this.$store.state.cartItems);
    },
    removeItem() {
      // this.$store.commit("removeItem");
      this.$store.dispatch("removeItem", this.details);
    },
  },
};
</script>

<style>
.food-details-outer {
  flex-direction: column;
  height: 100vh;
}
.food-details {
  background: #efe9e2;
  flex: 1;
  overflow-y: auto;
}
.fw-600 {
  font-weight: 600;
}
</style>
