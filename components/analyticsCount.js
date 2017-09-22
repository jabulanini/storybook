import React from 'react'
import {StyleSheet, css} from 'aphrodite'


const pickStyle = props =>{
  if(props.wide){
      return `col-6`
  }else{
      return `col-3`
  }

}


const AnalyticsCount = props =>{
    return(
        <div className={pickStyle(props)}>
            <div className={`${css(styles.borderBottom)} col-12`}>
            <p className={css(styles.title)}>{props.title}</p>
            <p className={css(styles.subtitle)}>{props.subtitle}</p>
            </div>
        </div>

    )

}
const styles = StyleSheet.create({
    title:{
        color:"#e2e2e2",
        fontSize:"14px",
        paddingBottom:"10px"

    },
    subtitle:{
        color:"#636363",
        fontSize:"22px"
    },
    borderBottom:{
        borderBottom:"1px solid #e8e8e8"
    }

})
export  default AnalyticsCount