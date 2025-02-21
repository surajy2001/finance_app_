import {useState, useEffect} from 'react'
import axios from 'axios'


function Register() {

    // Variable with the info we want displayed/mapped
    const [register_arr, setRegister_arr] = useState([])


    const registerAPI = async() => {
        const response = await axios.get('http://127.0.0.1:5000/register')
        setRegister_arr(response.data.register)
    }


    useEffect(() => {
        registerAPI()
    }, [])




    return (
        <>
        <div>
            {register_arr.map((register, index) => (
                <div>
                    <span>{register}</span>
                </div>
            ))}
        </div>
        </>
    )


}


export default Register