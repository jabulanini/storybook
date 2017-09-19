import React from 'react'
import { StyleSheet, css } from 'aphrodite'

 // Checkbox = ({ label }) => {

class Checkbox extends React.Component{
    getStyles() {


        if(this.props.wide){
            return `col-4 ${css(styles.dropdown) }`
        }
        else{
            return `col-8 ${css(styles.dropdown)}`
        }
    }

render(){
    return(
        <div className={`${css(styles.checkboxWrapper)} ${this.getStyles()}  clearfix`} >
            <input className={`${css(styles.checkbox)}`} type="checkbox"/>
            <label htmlFor="" className={css(styles.label)}>{this.props.label}</label>
        </div>

    )
}
}
const styles = StyleSheet.create({
        checkboxWrapper:{
            padding:"0px",
            paddingBottom:"15px"
        },
        checkbox: {
            display:"table-cell",
            verticalAlign:"middle"
        },
        label:{
            marginLeft:"15px",
        }
    }
)


export default Checkbox




