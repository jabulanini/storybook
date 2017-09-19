import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const renderRows= data =>{
    return data.map(row=><td className={css(styles.tableData)}>{row}</td>)

}


const TableRow = props => {

    function getGray() {
        if(props.index === 0 || props.index % 2 === 0 ){
            return (css(styles.gray))
        }
    }
    return (
        <tr className={getGray()}>
            {renderRows(props.data)}
        </tr>
    )

}
const styles = StyleSheet.create({
    tableData:{
        padding:"15px",
        textAlign:"center"
    },
    gray:{
        backgroundColor:"#f9f9f9"
    }
})
export default TableRow