import React from 'react'
import { StyleSheet, css } from 'aphrodite'


import TableHeader from './tableHeader'
import TableRow from './tableRow'

const renderRows = data =>{
    return data.map((row, index)=> <TableRow index={index} data={row}/>)
};


const Table = props => {
    return (
        <table className={`${css(styles.table)} col-12`}>
            <TableHeader data={props.headers}/>
            {renderRows(props.data)}
        </table>
    )


}

const styles = StyleSheet.create({
    table:{
        borderCollapse:"collapse"
    }
})

export default Table