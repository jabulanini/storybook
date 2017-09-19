import React from 'react'
import { StyleSheet, css } from 'aphrodite'


import Avatar from './avatar'
import AvatarInformationContent from './AvatarInformationContent'

export default class AvatarInformation extends React.Component{
    render(){
        return(
            <div className="formField col-8">
                <Avatar className="col-2"/>
                <AvatarInformationContent/>
            </div>
        )
    }
}