<template>
    <h1 data-test="Register title">Create an Account</h1>
    <p><input  type="text" placeholder="Email" v-model="email" /></p>
    <p><input  type="password" placeholder="Password" v-model="password" /></p>
    <p><button  @click="register">Submit</button></p>
    <p><button  @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import {ref} from "vue";
import {getAuth, 
        createUserWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithPopup,
} from  "firebase/auth";
import {useRouter} from  'vue-router'; //import router
const email = ref("");
const password = ref("");
const router = useRouter(); //get a reference to our vue router

const register = () => {
    // need .value because ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("Successfully registered!");
            router.push('/feed') // redirect to the feed
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });

};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/feed");
        })
        .catch((error) => {
            // handle error
            console.log(error.code);
            alert(error.message);
        })

};

</script>