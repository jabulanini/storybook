import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const HorizontalLine = () =>{
    return(
        <div className="formField col-12">
            <hr className={css(styles.horizontal)}/>
        </div>
    )
}

const styles = StyleSheet.create({
    horizontal:{
        width:"100%",
        height:"2px",
        backgroundColor:"#7ed321",
        border:"none"
    }
})
export default HorizontalLine