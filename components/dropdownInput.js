import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Label from './label'
import DropDown from "./dropdown";


export default class DropDownInput extends React.Component{
    render (){
        return(
            <div className="formField col-8">
                <Label className="col-4" content={this.props.label}/>
                <DropDown wideSmall options={this.props.options}/>
            </div>
        )
    }
}