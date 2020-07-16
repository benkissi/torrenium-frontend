import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #333744;
    box-sizing: border-box;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    width: 30%;
    height: auto;
    min-width: 500px;
    background-color: white;
    border-radius: 4px;
    box-sizing: border-box;

    .form-control {
        width: 100%;
        margin: 10px 10px;;
    }

    .form-control-button {
        width: 100%;
        margin-top: 10px;
    }

    .sign-up {
        cursor: pointer;
        font-weight: bold;
        color: #333744;
    }
`