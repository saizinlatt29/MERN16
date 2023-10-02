import React,{Component} from "react";
export default class LCconstructor extends Component{
    constructor(props){
        super(props);
        this.state ={
            number : 0
        };
        this.getRandom = this.getRandom.bind(this);
    }
    
    getRandom() {
        this.setState({ number : Math.floor(Math.random() *100)});
    }

    render(){
        return(
            <>
             <h1>lifecycle Constructor</h1>
             <p>Get Randon : {this.state.number} </p>
             <button onClick={this.getRandom}>Get Random Number</button>
            </>
        )
    }
}