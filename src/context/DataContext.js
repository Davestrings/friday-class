import React, {createContext, useState} from 'react'


const initialState={
    name:"Obi",
    class:"Cohort 5",
    age:30,
    phone:"0808484948464"
};
export const newContext = createContext()
function DataContext({children}){
    const [aState, setAState] = useState(initialState)
    return(
        <newContext.Provider value ={[aState,setAState]}>
            {children}   
        </newContext.Provider>
        
            
    )
}
export default DataContext;