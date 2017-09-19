import Search from 'react-icons/lib/fa/search'
import React from 'react'

const SearchIcon = props =>{
    return(
        <span>
            <Search className={props.className}/>
        </span>
    )
}
export default SearchIcon