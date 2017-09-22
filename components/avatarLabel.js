import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Label from './label'
import Avatar from './avatar'
import AvatarContent from './avatarContent'
import Row from "./row";


export default class AvatarLabel extends React.Component{
    render(){
        return(
            <Row>
                <Label className="col-4" content={this.props.label}/>
                <Avatar/>
                <AvatarContent />
            </Row>
        )
    }
}