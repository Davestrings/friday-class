import styled from 'styled-components'

export const Skillz = styled.div`
    /* height:100vh;
    width:100vw; */
    background-color:${({bc})=>bc?bc:'red'};
`

export const SkillzHeading = styled.h1`
    color:${(props)=>props.color?props.color:null};
    font-size:${(props)=>props.size?props.size:null};
`