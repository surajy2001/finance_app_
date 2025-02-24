import {useState} from 'react'
import supabase from '../helper/supabaseClient'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

// useState dhasboard variable stores api output we want displayed

function Dashboard() {

    const navigate = useNavigate()

    // const [dashboard_arr, setDashboard_array] = useState([])


    // Calling backend api
    // const dashboardAPI = async() => {
    //     const response = await axios.get('http://127.0.0.1:5000/dashboard')
    //     setDashboard_array(response.data.dashboard)
    // }
    
    // useEffect(() => {
    //     dashboardAPI()
    // }, [])

    // Functionality for signout button
    const SignOut = async () => {
        const {error} = await supabase.auth.signOut()
        if (error) throw error
        // navigate('/login')
        navigate('/')


    }




    return(
        <>
        <div>
            <h2>Hi, this is your app Home Screen/Dashboard</h2>
            <button onClick={SignOut}>Signout</button>
            <br></br>
            <br></br>
            <Link to='/user_ach_signin'>Link Bank Account</Link>
        </div>
        
        </>
    )

}


export default Dashboard