import style from "../Register/Register.css"

const Register = () => {
    return (
        <div class="site-content body">
            <div class="registration-form">
                <h4>Register</h4>
                <form>
                    <p>Name:</p>
                    <input type="text" name="name" placeholder="name" />
                    <p>Email:</p>
                    <input type="email" name="email" placeholder="email" />
                    <p>Password:</p>
                    <input type="password" name="password" placeholder="password" />
                    <p>Repeat Password:</p>
                    <input type="password" name="re-password" placeholder="re-password" />
                    <button type="submit">Register Now</button>
                </form>
            </div>
        </div>
    )
}
export default Register