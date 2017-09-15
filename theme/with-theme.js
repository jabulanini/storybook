import React, { PropTypes, Component } from 'react'
const withTheme = (ComponentToWrap) => {
    return class ThemeComponent extends Component {
        static contextTypes = {
            theme: PropTypes.object.isRequired,
        }

        render() {
            const { theme } = this.context

            return (
                <ComponentToWrap {...this.props} theme={theme} />
            )
        }
    }
}
export default withTheme