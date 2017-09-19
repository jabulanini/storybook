import React from 'react'
import { StyleSheet, css} from 'aphrodite'

import ArrowDownIcon from './arrowDownIcon'



class DropDown extends React.Component {
    constructor(props) {
        super(props)
    }
    getStyles () {

        if(this.props.wide){
            return `col-6 ${css(styles.dropdownWrapper) }`
        }
        else if(this.props.wideSmall){
            return `col-2 ${css(styles.dropdownWrapper) }`
        }
        else{
            return `col-4 ${css(styles.dropdownWrapper)}`
        }

    }

    renderOptions(){
        const options = this.props.options
        if(!options) return null
        return options.map(option=>{
            return(
                <option value={option}>{option}</option>
            )
        })
    }


    render(){
        return(
            <div className={`${this.getStyles()} clearfix`}>
                <select className={css(styles.dropdown)}>
                    {this.props.content + ':'}
                    {this.renderOptions()}
                </select>
                <ArrowDownIcon className={css(styles.arrowDown)}/>
                {/*<img className={css(styles.arrowDown)} src={arrowDown} alt={"Arrow Down"}/>*/}
            </div>
        )
    }
}

const styles = StyleSheet.create({
    dropdown:{
        width:"100%",
        height:"52px",
        textIndent:"15px",
        border:"1px solid #f2f2f2",
        outline:"none",
        position:"relative",
        zIndex:"2",
        backgroundColor:"transparent",
        webkitAppearance:"none",
        webkitBorderRadius: "0px",
        mozAppearance: "none",
        appearance: "none"

    },
    dropdownWrapper:{
        position:"relative",
        padding:"0px"
    },
    arrowDown:{
        position:"absolute",
        right:"15px",
        top:"16px",
        fontSize:"25px"

    },

})

export default DropDown