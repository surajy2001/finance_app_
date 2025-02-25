import {useState, useEffect} from 'react'
import supabase from '../helper/supabaseClient'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/Login_page.css'





function LoginPage() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [message, setMessage] = useState('')




    const handleSubmit = async(event) => {
        event.preventDefault()
        setMessage('')
    

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email, 
            password: password
        })

        if (error) {
            setMessage(error.message)
            return
        }

        if (data){
            navigate('/dashboard')
            return null 
        }

        setEmail('')
        setPassword('')



    }




    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <img src="/images/login_logo.png" alt="MONNX Logo" className="login-logo" />
                    <h1>Welcome Back</h1>
                    <p>Access your AI-powered wealth management dashboard</p>
                </div>
                {/* {message && <span>{message}</span>} */}
                {message && (
                    <div className="error-box">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        type='email' 
                        id='email'
                        placeholder='name@company.com'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        type='password'
                        id='password'
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        />
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span>Remember me</span>
                        </label>
                        <Link to='/forgot-password' className='forgot-password'>
                            Forgot password?
                        </Link>
                    </div>

                    <button type='submit' className='login-button'>
                        Sign In
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
                    <div className="security-badges">
                        <span>🔒 SOC 2 Type II Certified</span>
                        <span>🛡️ 128-bit Encryption</span>
                    </div>
                </div>
            </div>
        </div>
    )


}


export default LoginPage