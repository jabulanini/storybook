import React from 'react';
import { StyleSheet, css } from 'aphrodite'


class UserBlob extends React.Component {

  render(){
    return(
      <div className={css([styles.group, styles.flex])}>
      <img className={css(styles.image)} src="http://365psd.com/images/istock/previews/9353/93539553-flat-vector-avatar-face-character-person-portrait-user-icon.jpg" />
        <div>
          <h3 className={css(styles.title3)}>Title style 3</h3>
          <p className={css(styles.text2)} style={{display: 'inline'}} >Text style 2</p>
          <a href="#" className={css([styles.link, styles.marginRight20])}>091234567</a>
          <a href="#" className={css([styles.link, styles.marginRight20])}>email@provider.com</a>
          <a href="#" className={css([styles.link, styles.marginRight20])}>email@provider.com</a>
        </div>
      </div>
    )
  }
}




const styles = StyleSheet.create({
  marginRight20:{
    marginRight: 20
  },
  title3: {
    fontSize: 22,
    lineHeight: '26px'
  },
  text2: {
    fontSize: 18,
    lineHeight: '24px'
  },
  link:{
    color: '#222',
    textDecoration: 'none'
  },
  image:{
    borderRadius: '50%',
    flexBasis: 70,
    height: 70,
    border: '1px solid #222',
    float: 'left',
    marginRight: 15
  }
})


export{
  UserBlob
}
