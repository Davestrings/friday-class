import React, {useContext} from 'react';
import { newContext } from '../../context/DataContext';


export default function Data1(){
    const [initObj] = useContext(newContext)

    const myState = initObj

    return(
        <div>
            {console.log(initObj)}
            <h3>My name is {myState.name} <span><h3>
                I am in {myState.class} my phone number is {initObj.phone}
                and I am {myState.age} years old. </h3></span></h3>
        </div>
    )
}