<template>
    <div> 
    <header>
        <router-link class="link" to='/'>LOMBACK</router-link>
        <router-link class="link admin" to='/admin'>ADMIN</router-link>
    </header>
        <section class="content">
            <form>
                <label> Full Name</label>
                <input type="text" v-model="user.fullName">
                <label> EMAIL</label>
                <input type="text" v-model="user.email">
                <label> PHONE NO</label>
                <input type="text" v-model="user.phone_no">
                <button @click.prevent="register()"> Register </button>
            </form>
        </section>

    </div>
</template>
<script>
import axios from 'axios';
// import router from '../router';
export default {
  name: "register",
  data() {
  return {
      user:{
            fullName: "",
            email: "",
            phone_no:""
            },
        registerAs: this.$route.params.id
        }
    },

    methods:{
        register(){
            let registerAs = this.registerAs;
            // const self = this
           let users={
                fullName: this.user.fullName,
                Email: this.user.email,
                Phone_No: this.user.phone_no,
            }
            let url = `http://localhost:3000/v1/user/${registerAs}`
            console.log(url)
            console.log(users)
            axios.post(url,users)
            .then(response => {
        //     // // JSON responses are automatically parsed.
            this.$router.push('/')
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>
<style scoped>
*:focus{
    outline: none;
}
header{
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  padding: 10px;
  background:  #009cfe;
}

label, input{
    display: block;
    padding: 3px 0;
    margin: 5px;
    width: 100%;
    font-size: 15px;
    border: none;
}

input{
    background: #cececeba;
    padding: 4px 0px 4px  4px;
}

label{
    font-weight: 600;
}

header>.admin{
  color:  #009cfe;
  padding: 5px 30px;
  background: white;
  text-align: center;
}

 header a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
}

section.content{
    background: rgba(206, 206, 206, 0.18);
    display: flex;
    width: 100%;
    justify-content: space-around;
    min-height: 90vh
}

label{
    text-align: left;
}

form{
    padding: 20px;
    margin: 30px;
    width: 35%;
    background: white;
    height: 230px;
}

button{
    padding: 10px 30px;
    font-size: 15px;
    font-weight: 600;
    color: white;
    background: #009cfe;
    border: none;
    margin: 10px 5px;
}
</style>