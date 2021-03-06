import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Label from './label'
import CheckBox from "./checkbox";
import Row from './row'



export default class CheckBoxInput extends React.Component{

    renderCheckboxes(){
        const checkboxes = this.props.checkboxes
        if(!checkboxes) return null
        return checkboxes.map(checkbox => {
            return (
                <CheckBox wide={this.props.wide} className={css(styles.checkbox)} label={checkbox}/>
            )
        })

    }

    render(){
        return(
            <Row>
                <Label className="col-4" content={this.props.label}/>
                <div className="col-8 clearfix">
                    {this.renderCheckboxes()}
                </div>

            </Row>
        )
    }
}

const styles = StyleSheet.create({
        checkbox: {
            display:"table-cell",
            verticalAlign:"middle"
        }
    }
)
