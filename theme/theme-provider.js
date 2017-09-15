import React, { Component, PropTypes, Children } from 'react'
class ThemeProvider extends Component {
    static childContextTypes = {
        theme: PropTypes.object.isRequired,
    }

    getChildContext() {
        const { theme } = this.props
        return { theme }
    }
    render() {
        return Children.only(this.props.children)
    }
}

const decorateTheme = theme => story => {
    return (
        <ThemeProvider theme={theme}>
            {story()}
        </ThemeProvider>
    )
}

export default ThemeProvider

export {
    decorateTheme
}

// function decTheme (theme) {
//     return function (story) {
//         return (
//             <ThemeProvider theme={theme}>
//                 {story()}
//             </ThemeProvider>
//         )
//     }
// }