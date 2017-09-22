import React from 'react'
import { StyleSheet , css } from 'aphrodite'

const pickWidth = props =>{
    if(props.threecol){
        return `col-3`
    }else{
        return `col-4`
    }
}

const GrayBox = props => {

    return(
        <div className={pickWidth(props)}>
            <div className={`${css(styles.boxRounded)} col-12`}>
                <p className={css(styles.title)}>{props.title}</p>
                <p className={css(styles.subtitle)}>{props.subtitle}</p>
            </div>
        </div>

    )

}

const styles = StyleSheet.create({
    boxRounded:{
        borderRadius:"15px",
        backgroundColor:"#f9f9f9"
    },
    title:{
        fontSize:"35px",
        color:"#636363",
        paddingBottom:"10px"
    },
    subtitle:{
        color:"#9d9d9d",
        textTransform:"uppercase",
        paddingBottom:"10px"
    }
})

export default GrayBox