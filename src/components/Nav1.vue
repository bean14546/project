<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <div class="container">
        <b-navbar-brand href="#">
            <router-link class="routerLogo" to="/">TramTrack <img class="logo" src="https://th.bing.com/th/id/R80f92fc97b570021e0cab4517a95b996?rik=BzAxWuw1OlF1bg&riu=http%3a%2f%2fwww.brand.mju.ac.th%2fDownload%2fmjulogo%2fmju-logo2.png&ehk=aTYw9Zogrdg74CiLJqziHy7qtiPKaJ%2b5kGRnYgFImuQ%3d&risl=&pid=ImgRaw" alt="">
            </router-link>
            </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="signin">
              <router-link class="routerSignin" to="/">Sign In</router-link>
            </b-nav-item>
            <b-nav-item class="signup">
              <router-link class="routerSignup" to="/signup">Sign Up</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.routerLogo{
    color: #fff;
}
.routerLogo:hover{
    color: #fff;
    text-decoration: none;
}
.logo{
  width: 40px;
  margin: 0;
}
.signup {
  border: solid 1px #fff;
  border-radius: 10px;
}
.signup:hover {
  border: solid 1px rgb(0, 255, 0);
  border-radius: 10px;
}
.routerSignup {
  color: #fff;
}
.routerSignup:hover {
  color: #fff;
  text-decoration: none;
}
.routerSignin{
    color: #fff;
}
.routerSignin:hover{
    color: rgb(231, 231, 231);
    text-decoration: none;
}
</style>