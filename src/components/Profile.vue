<template>
  <div class="profile" :class="[profileOpenClass ? 'profile-open' : '' ]">
    <h2 class="title is-2">Title</h2>
    <h3 class="title is-3">Description</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    <h3 class="title is-3">Usage</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    <h3 class="title is-3">Dosage</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    profileOpenClass: Boolean
  },
  data () {
    return {
    }
  }
}
</script>
<style>
.profile {
  position: fixed;
  top: 52px;
  bottom: 0;
  width: 500px;
  right: -500px;
  transition: 0.5s;
  background-color: #a7a6a6;
  padding: 30px;
}
.profile-open {
  right: 0;
}
.profile p {
  margin-bottom: 30px;
}
</style>
