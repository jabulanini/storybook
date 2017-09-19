import React from 'react'
import { StyleSheet, css } from 'aphrodite'


const AvatarInformationContent = () =>{
    return(
        <div className="formField">
            <div className="col-12">
                <h3>GFNY Croatia</h3>
                <p>Danilo Trebjesanin is contat for GFNY Croatia</p>
            </div>
                <span className="col-6">
                    <bold>Email</bold>danilo@locastic.com
                </span>
                <span className="col-6">
                    <bold>Skype</bold>danilo-trebi
                </span>
                <span className="col-6">
                    <bold>Mobile</bold>+385 89 13131
                </span>
        </div>
    )

};

export default AvatarInformationContent