import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Label from './label'
import Avatar from './avatar'
import AvatarContent from './avatarContent'

export default class AvatarInput extends React.Component{
    render(){
        return(
            <div className="formField col-8">
                <Label className="col-2" label={this.props.label}/>
                <Avatar className="col-2"/>
                <AvatarContent className="col-8" />
            </div>
        )
    }
}