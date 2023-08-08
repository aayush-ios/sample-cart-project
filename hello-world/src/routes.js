import Home from "./components/Home";
import AcDetails from "./components/AcDetails";
import Dashboard from "./components/DashBoard.vue";
import Cart from "./components/Cart";

export default [
  { path: "/", component: Dashboard },
  { path: "/home", name: "home", component: Home },
  { path: "/ac-details", name: "ac-details", component: AcDetails },
  { path: "/cart", name: "cart", component: Cart },
];
