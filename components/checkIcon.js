import Check from 'react-icons/lib/fa/check'
import React from 'react'

const CheckIcon = props =>{
    return(
        <span>
            <Check className={props.className}/>
        </span>
    )
}
export default CheckIcon