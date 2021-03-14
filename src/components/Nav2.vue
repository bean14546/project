<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 ">
    <b-navbar toggleable="lg" type="dark" variant="success">
      <div class="container">
        <b-navbar-brand href="#">
          <router-link class="routerLogo" to="/map">
            TramTrack
            <img
              class="logo"
              src="https://th.bing.com/th/id/R80f92fc97b570021e0cab4517a95b996?rik=BzAxWuw1OlF1bg&riu=http%3a%2f%2fwww.brand.mju.ac.th%2fDownload%2fmjulogo%2fmju-logo2.png&ehk=aTYw9Zogrdg74CiLJqziHy7qtiPKaJ%2b5kGRnYgFImuQ%3d&risl=&pid=ImgRaw"
              alt
            />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="map">
              <router-link class="routerSignin" to="/map">แผนที่ 1</router-link>
            </b-nav-item>
            <b-nav-item class="map">
              <router-link class="routerSignin" to="/map2">แผนที่ 2</router-link>
            </b-nav-item>
            <b-nav-item class="tabletime">
              <router-link class="routerSignin" to="/tabletime">ตารางเวลาเดินรถคันที่ 1</router-link>
            </b-nav-item>
            <b-nav-item class="tabletime">
              <router-link class="routerSignin" to="/tabletime2">ตารางเวลาเดินรถคันที่ 2</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="signup">
              <router-link class="routerSignup" to="/">Logout</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.routerLogo {
  color: #fff;
}
.routerLogo:hover {
  color: #fff;
  text-decoration: none;
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
.routerSignin {
  color: #fff;
}
.routerSignin:hover {
  color: rgb(231, 231, 231);
  text-decoration: none;
}
</style>