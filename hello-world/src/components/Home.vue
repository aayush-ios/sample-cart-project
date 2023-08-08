<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="container mb-5 prod-data">
        <span @click.self="testSpanClick()" class="mousechange">Top rated</span>
        <div class="row">
          <div
            v-on:click="foodDetails(items)"
            v-for="items in topRated"
            :key="items.id"
            class="col-md-4 pointer"
          >
            <img
              :src="items.url"
              width="300px"
              height="300px"
              style="border-radius: 15px"
            />
            <h5 class="fw-600 black">{{ items.name }}</h5>
          </div>
        </div>
        <!--  -->
        <h4 class="my-4 fw-600 d-blue">All Categories</h4>
        <div class="row">
          <div
            v-on:click="foodDetails(items)"
            v-for="items in allCategories"
            :key="items.id"
            class="col-md-4 pointer"
          >
            <img
              :src="items.url"
              width="300px"
              height="300px"
              style="border-radius: 15px"
            />
            <h5 class="fw-600 black">{{ items.name }}</h5>
          </div>
        </div>
        <!--  -->
        <h4 class="my-4 fw-600 d-blue">Ac Parts</h4>
        <div class="row">
          <div
            v-on:click="foodDetails(items)"
            v-for="items in acParts"
            :key="items.id"
            class="col-md-4 pointer"
          >
            <img
              :src="items.url"
              width="300px"
              height="300px"
              style="border-radius: 15px"
            />
            <h5 class="fw-600 black">{{ items.name }}</h5>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
    allCategories() {
      return this.$store.state.allCategories;
    },

    acParts() {
      return this.$store.state.acParts;
    },
  },
  methods: {
    foodDetails(item) {
      this.$router.push({ name: "ac-details", params: item });
    },
    testSpanClick() {
      console.log("span clicked");
    },
  },
};
</script>

<style scoped>
$background-grey: #343a40;
$font-white: #fff;

.mousechange:hover {
  cursor: pointer;
}
.wrapper {
  height: auto;
}
.content {
  /* background: #efe9e2; */
  /* background: url("../assets/carrier-midea.jpg"); */
  flex: 1;
  overflow-y: auto;
}

.fw-600 {
  font-weight: 600;
}
.d-blue {
  color: dodgerblue;
}
.black {
  color: black;
}
.pointer {
  cursor: pointer;
}
</style>
