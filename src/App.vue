<template>
  <nav>
    <router-link to="/" > Home </router-link> |
    <router-link to="/feed" > Feed </router-link> |
    <router-link data-test="register btn" to="/register" > Register </router-link> |
    <router-link data-test="signin btn" to="/sign-in" > Login </router-link> |
    <button data-test="signout btn" @click="handleSignOut" v-if="isLoggedIn" >Sign Out</button>
  </nav>
  <router-view />
</template>

<script setup>

import{onMounted, ref} from "vue";
import{getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import router from "./router";

const isLoggedIn = ref(false);

let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user){
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
