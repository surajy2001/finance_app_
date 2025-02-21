import {useState, useEffect} from 'react'
import axios from 'axios'




function Login() {

    const [login_arr, setLogin_arr] = useState([])

    

    const loginAPI = async() => {
        const response = await axios.get("http://127.0.0.1:5000/login")
        setLogin_arr(response.data.login_page)
    }



    useEffect(() => {
        loginAPI()
    }, [])




    return (
        <>
        <div>
            {login_arr.map((login, index) => (
                <div>
                    <span>{login}</span>
                </div>
            ))}

        </div>
        
        </>
    )
    

}


export default Login