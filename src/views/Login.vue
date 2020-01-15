<template>
  <div class="login">
    <h1>Login</h1>
    <form class="modal-content animate" action="/login">


    <div class="container">
      <table>
        <tr><td>Username</td><td> <input type="text" placeholder="Enter Username" name="uname" required></td></tr>
         <tr><td>Password</td><td> <input type="password" placeholder="Enter Password" name="psw" required></td></tr>
         <tr><td>&nbsp;</td><td><button type="submit">Login</button></td> </tr>
       
        </table>

        <p>Continue shopping? Back to <router-link to="/">home</router-link></p>

    
    </div>

  </form>
  </div>
</template>

<style scoped>
table{
  margin: auto;
    border: 1px solid black;
    padding: 50px;
}
</style>
