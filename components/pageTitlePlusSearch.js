import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import Button from './Button'
import PageTitle from './pageTitle'
import PlusIcon from './plusIcon'
import SearchIcon from './searchIcon'
import Row from './row'

import Input from './input'


const PageTitlePlusSearch = props => {

    return(
        <Row
            underline
            center>
            <PageTitle
                title="Offline tickets"
                className="col-4"
            />
            <Button
                className="col-2"
                prefix={<PlusIcon/>}
                size='xlarge'
                color='primary'
                rounded>Edit</Button>

            {props.children}
            <div className="col-6">
                <Input
                    prefix={<SearchIcon/>}
                />
            </div>
        </Row>

    )

}
const styles = StyleSheet.create({
    wrapper:{
        display:"flex",
        alignItems:"center"
    },

});



export default PageTitlePlusSearch