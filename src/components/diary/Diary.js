import React, {useState, useContext} from 'react'
import { NewContext } from '../../context/DiaryContext'
import Data from './Data'
import { Skillz, SkillzHeading } from './style'

export default function Diary() {

    const [anyState, setAnyState] = useState('Diary')

    const [dataFromDiaryContext, setThatData ]= useContext(NewContext)

    return (
        <Skillz bc="#eef23a">
            <SkillzHeading size="70px" color="pink">
                Hello
                {dataFromDiaryContext.name}
                <button onClick={()=>setThatData({
                    ...dataFromDiaryContext,
                    name:'Elliot'
                })}>Diary</button>
            </SkillzHeading>
        </Skillz>
    )
}
