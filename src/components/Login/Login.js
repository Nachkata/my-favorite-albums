import style from "../Login/Login.css"

const Login = () =>{
    return(
        
        <div class="site-content body">
            <div class="login-form">
                <h2>Login</h2>
                <form>
                    <p>Email:</p>
                    <input type="email" name="email" placeholder="email" />
                    <p>Password:</p>
                    <input type="password" name="password" placeholder="password" />
                    <button class="login-button">Login Now</button>
                </form>
            </div>
        </div>
    )
}
export default Login