import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const renderHeaders = data =>{
    return data.map(header=><th className={css(styles.tableHeader)}><span>{header}</span> </th>)

}
const TableHeader = props => {
    return (
        <tr>
          {renderHeaders(props.data)}
        </tr>

    )

}
const styles = StyleSheet.create({
    tableHeader:{
        padding:"15px",
        textAlign:"center"
    },
})
export default TableHeader