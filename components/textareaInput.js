import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Label from './label'
import TextArea from "./textArea";


export default class TextAreaInput extends React.Component{



    render(){
        return(
            <div className="formField col-8">
                <Label className="col-4" content={this.props.label}/>
                <TextArea wide={this.props.wide} wideFull={this.props.wideFull} rows={this.props.rows} placeholder={this.props.placeholder}/>
            </div>
        )
    }

}
