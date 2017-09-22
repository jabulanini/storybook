import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const RadioButton = ({ label,name }) => {

    return(
    <div className={`clearfix col-2`} >
        <input className={`${css(styles.radio)}`} type="radio" name={name}/>
        <label htmlFor="" className={css(styles.label)}>{label}</label>
    </div>
    )


}
const styles = StyleSheet.create({

    radio: {
        display:"table-cell",
        verticalAlign:"middle"
    },
    label:{
        marginLeft:"15px",
    }

})

export default RadioButton