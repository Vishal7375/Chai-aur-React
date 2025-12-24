import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, auhtentication = true }) {

    const navigate = useNavigate()
    const [loader, SetLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if (auhtentication && authStatus !== auhtentication) {
            navigate("/login")
        } else if (!auhtentication && authStatus !== auhtentication) {
            navigate('/')
        }
        SetLoader(false)
    }, [authStatus, navigate, auhtentication])


    return loader ? <h1>Loading...</h1> : <>{children}</>
}


