import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Label from './label'
import DropDown from "./dropdown";
import Row from "./row";


export default class DropDownInput extends React.Component{
    render (){
        return(
            <Row>
                <Label className="col-4" content={this.props.label}/>
                <DropDown  options={this.props.options}/>
            </Row>
        )
    }
}