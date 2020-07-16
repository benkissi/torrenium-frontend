import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    min-width: 20%;
    height: 100px;
    border-radius: 4px;
    background-color: #333744;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
    cursor: pointer;

    .pic {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        margin-right: 5px;

        img {
            width: 100%;
        }
    }

    .details {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        color: white;

        h4 p{
            margin: 0;
            margin-top: 10px;

        }

    }
    
`

