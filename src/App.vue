<template>
  <div id="app">
  	<div class="navbar">
		<div class="navbar-menu" role="navigation" aria-label="main navigation">
			<div class="navbar-start">
			 	<div class="navbar-brand">
				    <a class="navbar-item" href="#">
				    	Amino
				    </a>
		    	</div>
		    </div>
	    	<div class="navbar-end">
				<a class="navbar-item" href="#">
				  Home
				</a>
				<a class="navbar-item" href="#">
				  Studies
				</a>
				<a class="navbar-item" href="#">
				  Contribute
				</a>
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
</style>
  