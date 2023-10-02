import React,{Component} from "react";
export default class LCcomDidMount extends Component{
    constructor(props){
        super(props);
        this.state ={
            number : 100
        };
    }

    componentDidMount() {
        const myTimer = setInterval(() =>{
            this.state.number > 0 ?
            this.setState({ number : this.state.number -1 })
            : clearInterval(myTimer)
        },1000);
    }

    render(){
        return(
            <>
             <h1>lifecycle componentDidMount</h1>
             <p> Number : {this.state.number} </p>
            </>
        )
    }
    }