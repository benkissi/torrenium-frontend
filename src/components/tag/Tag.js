import React from 'react'
import {Wrapper} from './TagStyles'

function Tag ({bgColor, children}) {
    return (
        <Wrapper bgColor={bgColor}>
            {children}
        </Wrapper>
    )
}

export default Tag