import React from 'react'
import { StyleSheet, css} from 'aphrodite'

import withTheme from '../theme/with-theme'
import queries from '../utils/media-queries'

class Label extends React.Component {
    constructor(props) {
        super(props)
    }

    topStyleLabel (){
        if(this.props.topLabel){
            return css(styles.topLabel)
        }
    }


    getStyles () {
        const { theme } = this.props

        if (!theme) return css(styles.label)

        const theming = StyleSheet.create({
            label: {
                color: theme.colors.primary,
            }
        })

        return css(styles.label, theming.label)
    }

    render(){
        return(
            <label
                className={`${this.getStyles()} ${this.topStyleLabel()}
                ${this.props.className} `}>
                {this.props.content + ':'}

            </label>
        )
    }
}

const styles = StyleSheet.create({
    label:{
        textAlign:"right",
        color:"#898989",
        verticalAlign:"middle",
        display:"table-cell",
        fontSize:"19px",
        [queries.s]: {
            fontSize: '50px'
        }
    },
    topLabel:{
        fontSize:"14px"
    }
})

export default withTheme(Label)