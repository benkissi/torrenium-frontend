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

    .pic {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;

        img {
            width: 100%;
        }
    }

    .details {
        flex: 1;
        display: flex;
        flex-direction: column;

        h4 {
            color: white;
        }
    }
`

