import {useState, useEffect} from 'react'
import axios from 'axios'

// useState dhasboard variable stores api output we want displayed

function Dashboard() {
    const [dashboard_arr, setDashboard_array] = useState([])


    // Calling backend api
    const dashboardAPI = async() => {
        const response = await axios.get('http://127.0.0.1:5000/dashboard')
        setDashboard_array(response.data.dashboard)
    }
    
    useEffect(() => {
        dashboardAPI()
    }, [])


    return(
        <>
        <div>
            {dashboard_arr.map((dashboard, index) => (
            <div>
                <span>{dashboard}</span>
            </div>
            ))}
        </div>
        
        </>
    )

}


export default Dashboard