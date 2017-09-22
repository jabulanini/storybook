import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

const getColor = props => {
    switch(props.color) {
        case 'black':
            return [css(styles.tableHeader)]
        case 'gray':
            return [css(styles.gray)]

    }

}
const getBg = props => {
    switch(props.bgColor) {
        case 'grayBackground':
            return [css(styles.grayBackground)]
    }

}

const renderHeaders = props =>{

    // const {  wide , wideFull  } = props
    return props.data.map(header=><th className={`${getColor(props)} ${getBg(props)}`}><span>{header}</span> </th>)

}
const TableHeader = props => {
    return (
        <tr>
          {renderHeaders(props)}
        </tr>

    )

}
const styles = StyleSheet.create({
    tableHeader:{
        padding:"15px",
        textAlign:"center"
    },
    gray:{
        color:"#d7d7d7"
    },
    grayBackground:{
        backgroundColor:"#9b9b9b"
    }

})

TableHeader.propTypes = {
    color: PropTypes.oneOf(['black', 'gray']),
}
export default TableHeader