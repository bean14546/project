<template>
  <div class="Signup">
    <div class="container">
      <form>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <h1 class="text-center headline">Create your account</h1>
            <div class="form-group text">
              <label>Name :</label>
              <input
                type="text"
                class="form-control form-control"
                placeholder="Enter your name"
                v-model="name"
              />
            </div>

            <div class="form-group text">
              <label>Last Name :</label>
              <input
                type="text"
                class="form-control form-control"
                placeholder="Enter Last Name"
                v-model="lastName"
              />
            </div>

            <div class="form-group text">
              <label>Username :</label>
              <input
                type="text"
                class="form-control form-control"
                placeholder="Enter your username"
                v-model="username"
              />
            </div>

            <div class="form-group password">
              <label>Password :</label>
              <input
                type="password"
                class="form-control form-control"
                placeholder="Enter your password"
                v-model="password"
              />
            </div>

            <button
              type="submit"
              class="btn btn-success btn-lg btn-block"
              @click="addData()"
            >Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      name: "",
      lastName: "",
      username: "",
      password: "",
    };
  },
  methods: {
    addData() {
      var data = {
        name: this.name,
        lastName: this.lastName,
        username: this.username,
        password: this.password,
      };
      db.collection("User")
        .doc()
        .set(data)
        .then(() => {
          alert("Add To Cloud Firestore Succes");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>
.Signup {
  margin-top: 6%;
}
.headline {
  margin-bottom: 30px;
}
</style>