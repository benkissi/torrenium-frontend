
import React from 'react'

import {Wrapper, Top, Bottom, SideNav, Content} from './DashboardStyles'


const DashbardLayout = props => {
    return (
        <Wrapper>
            <Top>
                
            </Top>

            <Bottom>
                <SideNav>
                    <ul>
                        
                    </ul>
                </SideNav>

                <Content>
                    {props.children}
                </Content>
                    
            </Bottom>
        </Wrapper>

    )
}

export default DashbardLayout