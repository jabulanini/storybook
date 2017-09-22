import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Button from '../components/Button'

const AvatarContent = () =>{
   return(
       <div>
           <Button className="col-1"
               size='large'
           >Upload</Button>
           <Button
               className="col-1"
               noBg
               size='large'
           >Remove</Button>
           <p className="col-7">Reccomended size 300x300px</p>
       </div>
   )

};

export default AvatarContent