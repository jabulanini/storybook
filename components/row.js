import React from 'react'
import { StyleSheet , css } from 'aphrodite'

const getStyles = props => {
    const tempStyles = [styles.row]

    if(props.center) tempStyles.push(styles.center)
    if(props.underline) tempStyles.push(styles.underline)

    return css(tempStyles)
}

const Row = props =>{
    return(
        <div className={getStyles(props)}>
            {props.children}
        </div>
    )
}

const styles = StyleSheet.create({
    row: {
        ':after': {
            content: '""',
            clear: "both",
            display: "table"
        }
    },
    center:{
        display:"flex",
        alignItems:"center"
    },
    underline:{
       borderBottom:"1px solid #7ed321"
    }
})

export default Row