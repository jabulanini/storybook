import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Label from './label'
import RadioButton from "./radiobutton";
import Row from './row'



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
            <Row>
                <Label className="col-4" content={this.props.label}/>
                <div>
                    {this.renderRadioButtons()}
                </div>

            </Row>
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
