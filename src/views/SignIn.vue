<template>
    <h1 data-test="Register title">Sign into your Account</h1>
    <p><input data-test="email input"  type="text" placeholder="Email" v-model="email" /></p>
    <p><input data-test="password input"  type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button data-test="submit btn"  @click="register">Submit</button></p>
    <p><button  @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import {ref} from "vue";
import {getAuth, 
        signInWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithPopup,
} from  "firebase/auth";
import {useRouter} from  'vue-router' //import router
const email = ref("");
const password = ref("");
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() //get a reference to our vue router

const register = () => {
    // need .value because ref()
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("Successfully signed in!");
            router.push('/feed') // redirect to the feed
        })
        .catch((error) => {
            console.log(error.code);
            switch(error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
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
            switch(error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        })
}

</script>