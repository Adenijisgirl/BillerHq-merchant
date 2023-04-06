import {useState} from 'react'
import {BASE_URL} from '../Helper/Action'
import axios from 'axios'



export const useProfile = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    
    let token = ""

    const profile = async() =>{
    setIsLoading(true)


   await axios.get(`${BASE_URL} /merchants/profile`, 
    {
        header: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }
    ).then((res)=>{
        console.log(res)
        setIsLoading(false)
    }).catch((err) =>{
        console.log(err)
        setError(err)
        setIsLoading(false)
    })
}

    return{
        profile, isLoading, error
    }
}