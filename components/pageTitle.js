import React from 'react'
import { StyleSheet,css } from 'aphrodite'

// const SelectBorderBottom = props=>{
//     switch (props.borderBottom){
//         case 'green':
//             return [css(styles.green)]
//     }
// }


const PageTitle = (props) =>{
    return(
        <div className={`${props.className}`}>
            <h1 className={css(styles.title)}>{props.title}</h1>
        </div>
    )

}
const styles = StyleSheet.create({
    title:{
        display:"inline-block"
    },
    // green:{
    //     borderBottom:"1px solid #7ed321"
    // }
})

export default PageTitle