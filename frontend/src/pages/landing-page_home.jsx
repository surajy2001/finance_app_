import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




function Homepage() {
    const [home_array, set_Home_array] = useState([])


    const homeAPI = async() => {
        const response = await axios.get('http://127.0.0.1:5000/')
        set_Home_array(response.data.home)
    }

    useEffect(() => {
        homeAPI()
    }, [])
    


    return (
        <>
        <div>
            <nav>
                <Link to='/register'>Register/Signup</Link>
                <br></br>
                <Link to='/login'>Login</Link>
            </nav>

            {home_array.map((home_text, index) => (
            <div key={index}>
                <span>{home_text}</span>
                <br></br>
            </div>
            ))
            }

        </div>

        </>
    )
}

export default Homepage