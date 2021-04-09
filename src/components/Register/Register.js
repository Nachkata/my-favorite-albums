import {auth} from '../../utils/firebase'
import style from "../Register/Register.css"

const Register = ({
    history
}) => {
    const onRegisterSubmitHandler = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const rePassword = e.target.rePassword.value
        if(password === rePassword){
            auth.createUserWithEmailAndPassword(email,password)
            .then(userCredential => {
                history.pushState('/')
            })
        }
    }
    return (
        <div class="site-content body">
            <div class="registration-form">
                <h4>Register</h4>
                <form onSubmit={onRegisterSubmitHandler}>
                    <p>Name:</p>
                    <input type="text" name="name" placeholder="name" />
                    <p>Email:</p>
                    <input type="email" name="email" placeholder="email" />
                    <p>Password:</p>
                    <input type="password" name="password" placeholder="password" />
                    <p>Repeat Password:</p>
                    <input type="password" name="rePassword" placeholder="rePassword" />
                    <button type="submit">Register Now</button>
                </form>
            </div>
        </div>
    )
}
export default Register