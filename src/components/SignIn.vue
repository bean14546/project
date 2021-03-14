<template>
  <div>
    <form>
      <div class="container">
        <div class="mb-3">
          <img src="https://cdn.onlinewebfonts.com/svg/img_411076.png" alt />
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <label class="form-label">Username :</label>
              <input type="text" class="form-control" placeholder="Username" v-model="username" />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <label class="form-label">Password :</label>
              <input type="password" class="form-control" placeholder="Password" v-model="password" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4"></div>
            <div class="col-md-4">
            <b-button class="btn btn-success btn-lg btn-block" @click="getData()">Login</b-button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      // dataInstore:null
    };
  },
  methods: {
    getData() {
      db.collection("User")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            var dataInstore = doc.data();
            if (
              dataInstore.username === this.username &&
              dataInstore.password === this.password
            ) {
              this.$router.replace("/map");
            } else {
              console.log("error");
            }
          });
        });
    },
  },
};
</script>

<style>
img {
  margin-top: 10%;
  width: 15%;
  margin-bottom: 25px;
}
</style>