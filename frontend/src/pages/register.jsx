import { useState } from 'react'
import supabase from '../helper/supabaseClient'
import { Link, useNavigate } from 'react-router-dom'


function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault()
        setMessage('')


        const {data, error} = await supabase.auth.signUp({
            email: email, 
            password: password,
        })


        if (error) {
            setMessage(error.message)
            return
        }

        if (data) {
            // setMessage('New account has been Created')
            navigate('/login')
            return null
        }

        setEmail('')
        setPassword('')

    
    }




    
    return (
        <div>
            <h2>Register Now</h2>
            <br></br>
            {message && <span>{message}</span>}
            <form onSubmit={handleSubmit} >
                <input 
                type='email' 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value = {email}  
                required
                />

                <input 
                type='password' 
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value = {password} 
                required 
                />
                <button type='submit'>Create Account</button>         
                <br></br>
                <nav>
                <Link to='/login'>Login</Link>
                </nav>
            </form>



        </div>
    )











}

export default Register
    // // Variable with the info we want displayed/mapped
    // const [register_arr, setRegister_arr] = useState([])


    // const registerAPI = async() => {
    //     const response = await axios.get('http://127.0.0.1:5000/register')
    //     setRegister_arr(response.data.register)
    // }


    // useEffect(() => {
    //     registerAPI()
    // }, [])

    




    // return (
    //     <>
    //     <div>
    //         {register_arr.map((register, index) => (
    //             <div>
    //                 <span>{register}</span>
    //             </div>
    //         ))}
    //     </div>
    //     </>
    // )





