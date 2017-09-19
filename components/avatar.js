import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Avatar = () => {
    return (
        <div className="col-2">
            <img className={css(styles.image)} src="http://365psd.com/images/istock/previews/9353/93539553-flat-vector-avatar-face-character-person-portrait-user-icon.jpg" alt=""/>
        </div>
            )
    
}



const styles = StyleSheet.create({
    image:{
        borderRadius: '50%',
        flexBasis: 70,
        height: 70,
        border: '1px solid #222',
        float: 'left',
        marginRight: 15
    }
})


export default Avatar
