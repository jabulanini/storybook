import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

export default class Button extends React.Component {

    constructor(props) {
        super(props)
    }

    pickSize() {
        switch(this.props.size) {
            case 'xsmall':
                return styles.xsmall
            case 'small':
                return styles.small
            case 'medium':
                return styles.medium
            case 'large':
                return styles.large
            case 'xlarge':
                return styles.xlarge
            default:
                return styles.medium
        }
    }

    pickRounded() {
        if(this.props.rounded) {
            return styles.rounded
        } else {
            return null
        }
    }
    pickPrefix(){
        if(this.props.prefix){
            return styles.prefix
        }else {
            return null
        }
    }
    pickSuffix(){
        if(this.props.suffix){
            return styles.suffix
        }else {
            return null
        }
    }
    PickColorTheme() {
        switch(this.props.color) {
            case 'default':
                return styles.default
            case 'primary':
                return styles.primary
            case 'warning':
                return styles.warning
            case 'success':
                return styles.success
            default:
                return styles.default
        }
    }
    pickBg(){
        if(this.props.noBg){
            return (styles.transparent)
        }else return null
    }

    pickStyle() {
        const _temp =  [
            styles.btn,
            this.pickSize(),
            this.PickColorTheme(),
            this.pickRounded(),
            this.pickPrefix(),
            this.pickSuffix(),
            this.pickBg()
        ]
        console.log(_temp)
        return _temp
    }

    // pickWidth(){
    //     if (this.props.width){
    //         return {width: this.props.width}
    //     } else{
    //         return null
    //     }
    // }

    // pickHeight(){
    //     if (this.props.width){
    //         return {lineHeight: this.props.height}
    //     } else{
    //         return null
    //     }
    // }
    renderPrefix() {
        if(this.props.prefix) {
            return (
                <span className={css(styles.btnTable)}>
                    {this.props.prefix}
                </span>
            )
        } else {
            return null
        }
    }
    renderSuffix() {
        if(this.props.suffix) {
            return (
                <span className={css(styles.btnTable)}>
                    {this.props.suffix}
                </span>
            )
        } else {
            return null
        }
    }
    pickContentStyle(){
        if(this.props.prefix || this.props.suffix){
            switch(this.props.size) {
                case 'xsmall':
                    return [styles.btnTable, styles.xsmallSpan]
                case 'small':
                    return [styles.btnTable,styles.smallSpan]
                case'medium':
                    return[ styles.btnTable,styles.mediumSpan]
                case 'large':
                    return [styles.btnTable,styles.largeSpan]
                case 'xlarge':
                    return [styles.btnTable,styles.xlargeSpan]
            }
        }else{
            return null
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <button
                    className={css(this.pickStyle())}
                    onClick={this.props.onClick}
                >
                    {this.renderPrefix()}
                    <span className={css(this.pickContentStyle())}>{this.props.children}</span>
                    {this.renderSuffix()}
                </button>
            </div>
        )
    }
}


Button.propTypes = {
    size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
    color: PropTypes.oneOf(['primary', 'warning', 'default', 'success']),
    rounded: PropTypes.bool,
    onClick: PropTypes.func,
    prefix: PropTypes.node,
    suffix: PropTypes.node
}

const styles = StyleSheet.create({

    btnTable: {
       display:"table-cell",
       verticalAlign:"middle",
       minWidth:30,
       height:40,

    },
    primary:{
      backgroundColor:'green'
    },
    transparent:{
        backgroundColor:"transparent"
    },
    xsmallSpan:{
        minWidth:45-20
    },
    smallSpan:{
        minWidth:45-20
    },
    mediumSpan:{
        minWidth:45-20
    },
    largeSpan:{
        minWidth:45-20
    },
    xlargeSpan:{
        minWidth:115-30
    },
    btn:{
        border:"none",
        outline:"none"
    },
    xsmall: {
        fontSize : 12,
        linHeight: '18px'
    },
    small: {
        fontSize : 14,
        linHeight: '20px'
    },
    medium: {
        fontSize: 16,
        lineHeight: '24px'
    },
    large: {
        fontSize: 20,
        lineHeight: '30px'
    },
    xlarge: {
        fontSize: 22,
        lineHeight: '28px'
    },
    rounded: {
        borderRadius:10,
    },


})
