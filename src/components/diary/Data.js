import React, {useContext} from 'react'
import { NewContext } from '../../context/DiaryContext'
import { SkillzHeading } from './style'

export default function Data(props) {
    const [person, setPerson] = useContext(NewContext)
    return (
        <div>
            <SkillzHeading color="red">Data Component</SkillzHeading>
            <h1>{props.anyState}</h1>

            <button onClick={()=>setPerson({
                ...person,
                name: 'Oroma'
            })}>Change</button>
        </div>
    )
}
