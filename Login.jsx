import React from "react";

function Login() {
  return (
    <div className="note">
      <form>
        <div>
          <h1> Login </h1>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="pword" placeholder="password" required />
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-primary form-control">
            <span class="glyphicon glyphicon-save"></span> Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
