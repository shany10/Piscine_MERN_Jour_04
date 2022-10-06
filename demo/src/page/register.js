import React from 'react';

function Register() {
  return (
   
      <header className="App-header">
        <form action="" method="post">
        <label for="login">login :</label><br/>
        <input type="login" name="login" required></input><br/>
        <label for="email">email :</label><br/>
        <input type="email" name="email" required></input><br/>
        <label for="pwd">password :</label><br/>
        <input type="password" name="pwd" required></input><br/>
        <label for="confirm_pwd">password confirm :</label><br/>
        <input type="password" name="confirm_pwd" required></input><br/>
        <input type="submit" value="save"></input>
        <button><a href="/login">login</a></button>
    </form>
      </header>
      
  );
}

export default Register;