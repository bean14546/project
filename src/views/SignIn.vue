<template>
  <div class="home">
    <Nav1  />
    <SignIn />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav1 from "@/components/Nav1.vue";
import SignIn from "@/components/SignIn.vue"

export default {
  name: "Home",
  components: {
    Nav1,
    SignIn
  }
};
</script>
