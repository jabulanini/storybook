import React from 'react'
import { StyleSheet, css } from 'aphrodite'


import Avatar from './avatar'
import Row from './row'
import AvatarInformationContent from './AvatarInformationContent'

export default class AvatarInformation extends React.Component{
    render(){
        return(
            <Row>
                <Avatar/>
                <AvatarInformationContent/>
            </Row>
        )
    }
}