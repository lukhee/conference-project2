<template>
<div>
     <div id="bg"></div>
    <header>
        <router-link class="link" to='/'>LOMBACK</router-link>
        <router-link class="link admin" to='/admin'>ADMIN</router-link>
    </header>
    <main>
        <section id="card">
            <ul>
                <li>
                    <span></span>
                    <strong> how may i help you</strong>
                </li><li>
                    <span></span>
                    <strong> i dont know if i can help</strong>
                </li><li>
                    <span></span>
                    <strong> That deep</strong>
                </li>
            </ul>
        </section>
        <section id="primary">
            <h1>Your Personal Assistant</h1>
            <p>Get help with your daily life stuff</p>
            <div class="register">
              <p>Register as </p>
            </div>
            <router-link :to="{name: 'register', params: {id: 'guest'}}">GUEST</router-link>
            <router-link :to="{name: 'register', params: {id: 'speaker'}}">SPEAKER</router-link>
        </section>
    </main>
  </div>
</template>
<script>
export default {
    name: "home"
}
</script>
<style scoped>
 #bg {
  clip-path: polygon(100% 0, 100% 14%, 61% 100%, 0 100%, 0 0);;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #009cfe;
}

@media (min-width: 840px) {
 #bg {
        clip-path: polygon(0 0, 83% 0, 59% 100%, 0% 100%);
  }
}
 header{
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  padding: 20px;
}

header>.admin{
  color: white;
  padding: 5px 30px;
  background: #009cfe;
  text-align: center;
}
 header a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
}

@media (min-width: 840px) {
  main {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 50% auto;
        grid-template-columns: 50% auto;
        grid-template-areas: "primary card";
  }
}

main section#card {
  background: white;
  padding: 20px;
  margin: 1em auto;
  border-radius: 20px;
  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 80%;
}

@media (min-width: 840px) {
  main section#card {
    grid-area: card;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
    margin: 1em;
  }
}

main ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

main li {
  margin-bottom: 10px;
}

main li span {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #cbebff;
  border-radius: 50%;
  margin-right: 10px;
}

main li strong {
  display: inline-block;
  margin-left: 40px;
  margin-top: 5px;
}

main section#primary {
  color: #fff;
  padding: 15px;
   text-align: center;
}

@media (min-width: 840px) {
  main section#primary {
    grid-area: primary;
    text-align: left;
    margin: 4em 0 0 4em;
  }
}

main section#primary h1 {
  font-size: 3em;
  margin-top: 10px;
  text-transform: uppercase;
}

@media (min-width: 840px) {
  main section#primary h1 {
    width: 30%;
    font-size: 4em;
    line-height: .9em;
  }
}

main section#primary p {
  font-size: 1.4em;
}

main section#primary a {
  color: #001f32;
  border-radius: 20px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #fff6bb;
  display: block;
  font-weight: bold;
  text-align: center;
  margin: 5px 5px;
  padding: 15px;
}
main section#primary .register {
  margin: 80px auto 0 auto;
}

@media (min-width: 840px) {
  main section#primary a {
    display: inline-block;
    padding: 15px 60px;
  }
}

</style>