<template>
  <div id="app" class="app container-fluid">
  	<div class="navbar">
		<div class="navbar-menu" role="navigation" aria-label="main navigation">
			<div class="navbar-start">
			 	<div class="navbar-brand">
				    <a class="navbar-item title" href="/">
				    	Amino
				    </a>
		    	</div>
		    </div>
	    	<div class="navbar-end">
        <a class="navbar-item" href="/amino-acid">
          Acides aminés
        </a>
				<a class="navbar-item" href="/studies">
				  Etudes
				</a>
				<a class="navbar-item" href="/contribute">
				  Contribuer
				</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Lang
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="/us">
              Us
            </a>
            <a class="navbar-item" href="/fr">
              Fr
            </a>
          </div>
        </div>
			</div>
		  </div>
		</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
   @import './assets/scss/design.scss';

   .navbar {
   	background-color: #f1f1f1;
   	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
   	z-index: 1;
   }
</style>
