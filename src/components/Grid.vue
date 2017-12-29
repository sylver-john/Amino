<template>
  <div>
    <nav>
      <ul class="columns is-mobile">
        <li class="column is-4 is-offset-1"><a href="#">L-Alanine</a></li>
        <li class="column"><a href="#">L-Arginine</a></li>
        <li class="column"><a href="#">L-Asparagine</a></li>
        <li class="column"><a href="#">L-Aspartate</a></li>
      </ul>
      <ul class="columns is-mobile">
        <li class="column"><a href="#">L-Cystéine</a></li>
        <li class="column"><a href="#">L-Glutamate</a></li>
        <li class="column"><a href="#">L-Glutamine</a></li>
        <li class="column"><a href="#">Glycine</a></li>
        <li class="column"><a href="#">L-Histidine</a></li>
        <li class="column"><a href="#">L-Isoleucine</a></li>
      </ul>     
      <ul class="columns is-mobile">
        <li class="column"><a href="#">L-Leucine</a></li>
        <li class="column"><a href="#">L-Lysine</a></li>
        <li class="column"><a href="#">L-Méthionine</a></li>
        <li class="column"><a href="#">L-Phénylalanine</a></li>
        <li class="column"><a href="#">L-Proline</a></li>
        <li class="column"><a href="#">L-Pyrrolysine</a></li>
      </ul>
      <ul class="columns is-mobile">
        <li class="column"><a href="#">L-Sélénocystéine</a></li>
        <li class="column"><a href="#">L-Sérine</a></li>
        <li class="column"><a href="#">L-Thréonine</a></li>
        <li class="column"><a href="#">L-Tryptophane</a></li>
        <li class="column"><a href="#">L-Tyrosine</a></li>
        <li class="column"><a href="#">L-Valine</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  data () {
    return {
    }
  }
}
</script>
<style>
* {margin: 0; padding: 0;}

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
  font: 14px/1 Helvetica, Verdana, sans-serif;
  text-transform: uppercase;
  -webkit-transition: all 0.5s ease;
}

li a:hover {
  font-weight: bold;
  color: #333;
}
</style>
