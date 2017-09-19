import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Button from '../components/Button'

const AvatarContent = () =>{
   return(
       <div className="col-8">
           <Button
               size='large'
           >Upload</Button>
           <Button
               noBg
               size='large'
           >Remove</Button>
           <p>Reccomended size 300x300px</p>
       </div>
   )

};

export default AvatarContent