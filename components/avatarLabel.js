import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Label from './label'
import Avatar from './avatar'
import AvatarContent from './avatarContent'
import Question from "./sortIcon";


export default class AvatarLabel extends React.Component{
    render(){
        return(
            <div className="formField col-8">
                <Label className="col-4" content={this.props.label}/>
                <Avatar/>
                <AvatarContent />
            </div>
        )
    }
}