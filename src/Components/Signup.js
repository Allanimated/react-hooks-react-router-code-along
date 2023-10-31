import React from "react";

function SignUp() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
        <div>
            <input type="text" name="firstname" placeholder="First Name" />
          </div>
          <div>
            <input type="text" name="secondname" placeholder="Second Name" />
          </div>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <input type="password" name="confirmpassword" placeholder="Confirm Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default SignUp;
  