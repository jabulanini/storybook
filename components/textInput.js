import React from 'react'
import { StyleSheet, css} from 'aphrodite'


export default class TextInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <input type="text" className={`${css(styles.textInput)} ${this.props.className} placeholderBlack`} placeholder={this.props.placeholder } />
        )
    }
    
}

const styles = StyleSheet.create({
        textInput:{
            verticalAlign:"middle",
            display:"table-cell",
            outline:"none",
            border:"1px solid #f2f2f2"
        }
})