import React from 'react'
import { StyleSheet, css} from 'aphrodite'

import Label from './label'
import TextInput from './textInput'

class LabelInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
           <div className="formField col-7">
               <Label content="Select franchise owner"/>
               <TextInput placeholder="dsdsa"/>
           </div>
        )
    }


}

export default LabelInput