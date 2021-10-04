import React from "react";

function Signup() {
  return (
    <div className="note">
      <form>
        <div>
          <h1> SignUp </h1>
          <label>Username:</label>
          <input type="text" id="username" placeholder="Username" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" placeholder="Email" required />
          <i class="far fa-envelope-open text-primary"></i>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="pword" placeholder="password" required />
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-primary form-control">
            <span class="glyphicon glyphicon-save"></span> SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
