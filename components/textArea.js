import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const getStyle = props => {
    if (props.wide) {
        return `col-8 ${css(styles.textArea) }`
    }
    else if(props.wideFull) {
        return `col-12 ${css(styles.textArea)}`
    }
    else{
        return `col-4 ${css(styles.textArea)}`
    }
}

const TextArea = props =>{

    const { rows, wide , wideFull ,placeholder } = props

    return(
        <div className="col-8">
            <textarea className={getStyle(props)}  rows={rows} placeholder={placeholder}/>
        </div>
    )
}

const styles = StyleSheet.create({
    textArea:{
        resize:"none",
        outline:"none",
        border:"1px solid black"
    }
});

export default TextArea