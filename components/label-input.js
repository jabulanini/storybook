import React from 'react'
import { StyleSheet, css} from 'aphrodite'

import Label from './label'
import TextInput from './textInput'

import'../assets/globals.css'



class LabelInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
           <div className="formField col-8">
               <Label className="col-4" content="Select franchise owner"/>
               <TextInput className="col-8" placeholder="dsdsa"/>
           </div>
        )
    }


}

export default LabelInput