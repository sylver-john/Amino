<template>
  <div class="grid">
    <nav>
      <ul class="columns is-mobile">
        <li class="column is-2 is-offset-2"><a href="#" @click="addProfileClass(1)">L-Alanine</a></li>
        <li class="column is-2"><a href="#" @click="addProfileClass(2)">L-Arginine</a></li>
        <li class="column is-2"><a href="#" @click="addProfileClass(3)">L-Asparagine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(4)">L-Aspartate</a></li>
      </ul>
      <ul class="columns is-mobile">
        <li class="column"><a href="#" @click="addProfileClass(5)">L-Cystéine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(6)">L-Glutamate</a></li>
        <li class="column"><a href="#" @click="addProfileClass(7)">L-Glutamine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(8)">Glycine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(9)">L-Histidine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(10)">L-Isoleucine</a></li>
      </ul>     
      <ul class="columns is-mobile">
        <li class="column"><a href="#" @click="addProfileClass(11)">L-Leucine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(12)">L-Lysine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(13)">L-Méthionine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(14)">L-Phénylalanine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(15)">L-Proline</a></li>
        <li class="column"><a href="#" @click="addProfileClass(16)">L-Pyrrolysine</a></li>
      </ul>
      <ul class="columns is-mobile">
        <li class="column"><a href="#" @click="addProfileClass(17)">L-Sélénocystéine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(18)">L-Sérine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(19)">L-Thréonine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(20)">L-Tryptophane</a></li>
        <li class="column"><a href="#" @click="addProfileClass(21)">L-Tyrosine</a></li>
        <li class="column"><a href="#" @click="addProfileClass(22)">L-Valine</a></li>
      </ul>
    </nav>
    <profile :profileOpenClass="profileOpenClass" :profile="currentProfile"></profile>
  </div>
</template>
<script>
import Profile from './Profile.vue'

export default {
  name: 'Grid',
  components: { Profile },
  data () {
    return {
      profileOpenClass: false,
      currentProfile: null
    }
  },
  methods: {
    addProfileClass (profile) {
      this.profileOpenClass = !this.profileOpenClass
      this.currentProfile = profile
    }
  }
}
</script>
<style>
* {
  margin: 0; padding: 0;
  font: 16px/1 Helvetica, Verdana, sans-serif;
}

.grid {
  margin-top: 10%;
}

nav {
  width: 80;
  margin: 50px;
}

ul {
  list-style-type: none;
}

li {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 0px;
  border-right: 1px solid #aaa;
  padding: 0 10px;
}

li:last-child {
  border-right: none;
}

li a {
  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
  -webkit-transition: all 0.5s ease;
}

li a:hover {
  font-weight: bold;
  color: #333;
}
</style>
