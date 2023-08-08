<template>
  <footer>
    <div class="footer">
      <div style="margin-left: 20px">
        <h4 class="fw-600">Career AC Dealer</h4>
      </div>
      <div class="about-us">
        <div>
          <h5 class="fw-600">About Us</h5>
        </div>
        <div>
          <h5 class="fw-600">T & C</h5>
        </div>
        <div>
          <h5 class="fw-600">Privacy Policy</h5>
        </div>
        <div>
          <h5 class="fw-600">Contect Us</h5>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: "Footer" };
</script>

<style scoped>
.footer {
  min-height: 60px;
  background-color: #e2e1e2;
  display: flex;
  justify-content: space-between;
  padding-top: 17px;
}
.about-us {
  display: flex;
  width: 500px;
  justify-content: space-evenly;
  font-color: #004187;
}
.fw-600 {
  font-weight: 600;
  color: #004187;
}
</style>
