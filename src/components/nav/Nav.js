import React from 'react'
import {Link} from 'react-router-dom'

import {Wrapper, Logo, Links} from './NavStyles'

function Nav () {
    return (
        <Wrapper>
            <Logo>
                Torrenium
            </Logo>
            <Links>
                Logout
            </Links>
        </Wrapper>
    )
}

export default Nav