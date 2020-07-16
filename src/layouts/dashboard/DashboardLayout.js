
import React, {useContext, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Nav from '../../components/nav'
import { AppContext } from "../../store/store";

import {Wrapper, Top, Bottom, SideNav, Content} from './DashboardStyles'



const DashbardLayout = props => {
    const { store } = useContext(AppContext);
    let history = useHistory();
    useEffect(() => {
        if(!store.loggedIn){
            history.push("/")
        }
    }, [store])
    return (
        <Wrapper>
            <Top>
                <Nav/>
                
            </Top>

            <Bottom>
                <Content>
                    {props.children}
                </Content>
                    
            </Bottom>
        </Wrapper>

    )
}

export default DashbardLayout