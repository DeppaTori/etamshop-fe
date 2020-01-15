<template>
  <div class="header_bar">
      <router-link to="/login" class="header_link hl_right">Login</router-link>
      <router-link to="/about-us" class="header_link">About Us</router-link>
      <router-link to="/shop" class="header_link">Shop</router-link>
       <router-link to="/" class="header_link">Home</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderMenu extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a.header_link{
        background-color: black;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    display: block;
    float: right;

}
a.header_link:hover{
    color:black;
    background-color: white;
}
a.hl_right{
        margin-right: 50px;
}
.header_bar{
        position: fixed;
    border: 1px solid black;
    padding: 19px 20px;
    width: 100%;
    background-color: black;
    top: 0;
 
}
</style>
