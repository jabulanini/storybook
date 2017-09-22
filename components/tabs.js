import React from 'react'
import {StyleSheet, css } from 'aphrodite'

//
// function handleClick(e) {
//     if(e.currentTarget.classList.contains('active')){
//         console.log("true")
//
//     }else {
//        console.log("false")
//     }
// }
//
// const listItems = props => {
//     return props.data.map((tab, index)=><li key={index} className={css(styles.listStyle)}>
//         <a onClick={handleClick} className={`${css(styles.link)}`}>{tab}</a>
//     </li>)
// }
//
// const TabsList = props => {
//     return(
//         <div className={css(styles.borderBottom)}>
//             <ul>
//                 {listItems(props)}
//             </ul>
//         </div>
//
//     )
// }
class TabsList extends React.Component{

    constructor(props){
        super(props)

        this.onClickItem=this.onClickItem.bind(this)
        this.pickActiveStyle=this.pickActiveStyle.bind(this)

        this.state={
            id:0
        }
    }
    changeActive(id){
        this.setState({
            id: parseInt(id,10)
        })
    }

    onClickItem(e){
        this.changeActive(e.target.id)
    }

    pickActiveStyle(id){
        if(id===this.state.id){
            return css([styles.link, styles.active])
        }else{
            return css(styles.link)
        }
    }

    renderListItems(){
        return this.props.data.map((tab, index)=><li key={index} className={css(styles.listStyle)}>
            <a id={index} onClick={this.onClickItem} className={this.pickActiveStyle(index)}>{tab}</a>
        </li>)
    }

    render(){
        return(
            <div className={css(styles.borderBottom)}>
                <ul>
                    {this.renderListItems()}
                </ul>
            </div>
        )
    }
}




const styles = StyleSheet.create({
    listStyle:{
        display:"inline-block",
        paddingTop:"15px",
        paddingBottom:"15px",

    },
    borderBottom:{
        borderBottom:"2px solid #e8e8e8",
    },
    link:{
        cursor:"pointer",
        color:"#e8e8e8",
        paddingRight:"15px",
        paddingLeft:"15px"
    },
    active:{
        color:"#4a4a4a",
        listStyleType:"none",
        paddingBottom:"12px",
        borderBottom:"4px solid #7ed321"
    }
})

export default TabsList

