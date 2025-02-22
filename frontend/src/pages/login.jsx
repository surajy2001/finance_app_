import {useState, useEffect} from 'react'
import supabase from '../helper/supabaseClient'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'





function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        <>
        <div>
            <h2>Login</h2>
            <br></br>
            {message && <span>{message}</span>}
            <form onSubmit={handleSubmit}>
                <input 
                type='email' 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />

                <input 
                type='password'
                placeholder ='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />
                <button type='submit'>Login</button>
            </form>
            <span>Want to envision your Finances?</span>
            <br></br>
            <span> Manage your Assets?</span>
            <Link to='/register'>Create Account</Link>


        </div>
        
        </>
    )


}


export default Login