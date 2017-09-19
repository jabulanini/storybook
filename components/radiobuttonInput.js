import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Label from './label'
import RadioButton from "./radiobutton";



export default class RadioButtonInput extends React.Component{

    renderRadioButtons(){
        const radioButtons = this.props.radioButtons
        if(!radioButtons) return null
        return radioButtons.map(radioButton => {
            return (
                <RadioButton className={css(styles.radioButton)} name={this.props.name} label={radioButton}/>
            )
        })
    }

    render(){
        return(
            <div className="formField col-8">
                <Label className="col-4" content={this.props.label}/>
                <div className="col-8 clearfix">
                    {this.renderRadioButtons()}
                </div>

            </div>
        )
    }
}

const styles = StyleSheet.create({
    radioButton: {
            display:"table-cell",
            verticalAlign:"middle"
        }
    }
)
