import React,{useContext} from 'react';
import { newContext } from '../../context/DataContext';


export default function Data2(){
    const [user,setUser] = useContext(newContext)
    return(
        <div>
            <button onClick={()=>setUser({
                ...user,
                name: 'jacob',
                phone: '0938473827',
                class: 'cohort 8',
                age: 16
            })}>Data2 Button</button>
        </div>
    )
}