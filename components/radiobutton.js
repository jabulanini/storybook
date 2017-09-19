import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const RadioButton = ({ label,name }) => {

    return(
    <div className={`${css(styles.radioWrapper)}  clearfix col-4`} >
        <input className={`${css(styles.radio)}`} type="radio" name={name}/>
        <label htmlFor="" className={css(styles.label)}>{label}</label>
    </div>
    )


}
const styles = StyleSheet.create({
    radioWrapper:{
        padding:"0px",
        paddingBottom:"15px"
    },
    radio: {
        display:"table-cell",
        verticalAlign:"middle"
    },
    label:{
        marginLeft:"15px",
    }

})

export default RadioButton