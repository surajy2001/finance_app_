import {useState, useEffect} from 'react'
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
            {/* <button>Login</button> */}

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