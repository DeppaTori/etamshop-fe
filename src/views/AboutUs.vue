<template>
  <div class="about-us">
     <HeaderMenu />
      <div class="margin50">
    <HelloWorld msg="About Us"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderMenu from '@/components/header/HeaderMenu.vue';

export default {
  name: 'about-us',
  components: {
    HelloWorld,
    HeaderMenu
  }
}
</script>

<style>

.margin50{
  margin-top:95px;
}



</style>
