import React, {createContext, useState} from 'react'

const initialState = {
    name:"Cindy Joseph",
    age: 23,
    email: "iloveskillz@gmail.com",
    address: "somewhere at yaba"
}

export const NewContext = createContext()

export default function DiaryContext({children}) {
    const [newState, setNewState] = useState(initialState)
    return (
        <NewContext.Provider value={[newState,setNewState]}>
            {children}
        </NewContext.Provider>
    )
}
