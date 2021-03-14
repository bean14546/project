<template>
  <div class="home">
    <Nav1  />
    <SignUp />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav1 from "@/components/Nav1.vue";
import SignUp from "@/components/SignUp.vue"
export default {
  name: "Home",
  components: {
    Nav1,
    SignUp
  }
};
</script>
