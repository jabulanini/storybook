import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

const PrefixStyle = props =>{
    if(props.prefix){
        return [styles.prefix,styles.input]
    }else {
        return null
    }
}
const renderPrefix= props=> {
    if(props.prefix) {
        return (
            <span className={css(styles.prefix)}>
                    {props.prefix}
                </span>
        )
    } else {
        return null
    }
}

const Input = props => {
    return (
        <div className= {css(styles.floatRight)}>
            {renderPrefix(props)}
        <input
            type="text"
            className={`${css(styles.input)} ${PrefixStyle(props)}`}
            placeholder="search"
        />
        </div>
    )
}

export default Input

const styles = StyleSheet.create({
    floatRight:{
        float:"right",
        position:"relative"
    },
    input:{
        outline:"none",
        border:"none",
        cursor:"pointer",
        marginLeft:"30px",
        color:"#9b9b9b"

    },
    prefix:{
        color:"#9b9b9b",

        position:"absolute",
        left:"0px"


    }
})
Input.propTypes = {
    suffix: PropTypes.node
}