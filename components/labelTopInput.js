import React from 'react'
import { StyleSheet,css } from 'aphrodite'
import Label from "./label";


const labelTopInput = props => {
    return(
        <div>
            <Label
                topLabel
                content={props.content}/>
        <input
            className={`${props.className} ${css(styles.input)}`}
            type = "text"
        required=""/>
        </div>
    )

}

const styles = StyleSheet.create({
    input:{
        padding:"10px",
        outline:"none",
    }
})

export default labelTopInput