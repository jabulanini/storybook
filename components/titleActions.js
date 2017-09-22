import React from 'react'
import { StyleSheet, css  } from 'aphrodite'
import Label from "./label";
import DropDownInput from "./dropdownInput";
import PropTypes from 'prop-types'



const TitleActions = props =>{
    return(
        <div>
            <Label className={props.className} content={props.label}/>
            {props.actions}
        </div>
    )
}

TitleActions.propTypes = {
    label:PropTypes.string.isRequired,
    actions:PropTypes.arrayOf(
            PropTypes.node
    )
}

export default TitleActions