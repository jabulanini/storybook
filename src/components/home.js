import React from 'react';

export class Home extends React.Component{

    age = '';
    constructor(props){
        super();
        this.state = {
            age: props.age,
            status: 0,
            homeLink: props.initilaLinkName
        };
        setTimeout(() => {
            this.setState({
                status:1
            })
        },2000)
        console.log("Constructor")
    }
    componentWillMount(){
        console.log("Component will mount")
    }

    componentDidMount(){
        console.log("Component did mount")
    }
    componentWillReceiveProps(newProps){
        console.log("Component will mount" , newProps)
    }
    shouldComponentUpdate(newProps, newState){
        console.log("should component update", newProps, newState)
        return true
    }
    componentWillUpdate(newProps, newState){
        console.log("will component update", newProps, newState)
    }
    componentDidUpdate(prevProps, prevState){
        console.log("did component update", prevProps, prevState)
    }
    componentWillUnmount(){
        console.log("did component unmount",)
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }
    onCbangeLink(){
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event){
        this.setState({
            homeLink:event.target.value
        })

    }

    render(){
        return(

           <div>
               <p>In a new compoment</p>
               <p>User Object => Name: {this.name} , Age: {this.state.age}</p>
               <p>Age: {this.state.status}</p>
               <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
               <button onClick={()=>this.onMakeOlder()} className="btn btn-primary">Make me older</button>
               <hr/>
               <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
               <hr/>
               <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
               <button onClick={this.onCbangeLink.bind(this)} className="btn btn-primary">Change Header link</button>

           </div>
        )
    }
}