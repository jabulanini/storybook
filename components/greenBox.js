import React from 'react'
import { StyleSheet , css } from 'aphrodite'


const pickWidth = props =>{
    if(props.threecol){
        return `col-3`
    }else{
        return `col-4`
    }
}


const GreenBox = props => {

    return(
        <div className={pickWidth(props)}>
            <div className={`${css(styles.boxRounded)} col-12`}>
                <p className={css(styles.information)}>{props.information}</p>
                <div className={css(styles.title)}>
                    <p className={css(styles.title)}>{props.title}</p>
                    <p className={css(styles.subtitle)}>{props.subtitle}</p>
                </div>
            </div>
        </div>

    )

}

const styles = StyleSheet.create({
    boxRounded:{
        borderRadius:"15px",
        backgroundColor:"#7ed321"
    },
    information:{
        fontSize:"35px",
        color:"#e8fed0",
        paddingBottom:"10px"
    },
    title:{
        color:"#ffffff",
        textTransform:"uppercase",
        paddingBottom:"10px"
    },
    subtitle:{
        color:"#ccfc97",
        textTransform:"uppercase",
        paddingBottom:"10px"
    }
})

export default GreenBox