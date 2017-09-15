import React from 'react'
import { StyleSheet, css} from 'aphrodite'
import colors from './colors'

export default class TextInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <input type="text" className={`${css(styles.textInput)} placeholderGreen formBorder`} placeholder={this.props.placeholder } />
        )
    }
    
}

const styles = StyleSheet.create({
        textInput:{
            verticalAlign:"middle",
            display:"table-cell",
            outline:"none",
            padding:"10px 0 10px 10px",
            backgroundColor:colors.backgroundColor,
            border:"1px solid "+ colors.backgroundColor
        }
})