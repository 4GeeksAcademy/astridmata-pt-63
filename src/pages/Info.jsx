import {useEffect, useState} from "react"

import useGlobalReducer from "../hooks/useGlobalReducer"; 

export const Info =()=>{

const { store, dispatch } = useGlobalReducer()

let [message, setMessage]= useState("")


    return(
        <div>
            <h1>Info</h1>

            <h2>{store.saludo}</h2>


            <input type="text" onChange={(e)=>{setMessage(e.target.value)}}/>

            <button onClick={()=>dispatch({
                type:"change_saludo",
                payload: {message:message}
            })}>
                cambiar saludo
            </button>



{/* actualizar el global store de la lista de contactos */}
            {/* dispatch({type: "get_contacts"
            payload: data..contacts}) */}

        </div>
    )

}

