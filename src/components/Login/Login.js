import {auth} from '../../utils/firebase'
import style from "../Login/Login.css"

const Login = ({
    history
}) =>{
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        auth.signInWithEmailAndPassword(email,password)
        .then((userCredential) =>{
            console.log(userCredential);
            history.push('/')
        })
    }
    return(
        <div class="site-content body">
            <div class="login-form">
                <h2>Login</h2>
                <form onSubmit={onLoginFormSubmitHandler}>
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