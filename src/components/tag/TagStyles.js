import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    font-size: 10px;
    padding: 10px;
    width: max-content;
    height: max-content;
    margin: 2px;
    background-color: ${props => props.bgColor? props.bgColor : '#ccc'}
`