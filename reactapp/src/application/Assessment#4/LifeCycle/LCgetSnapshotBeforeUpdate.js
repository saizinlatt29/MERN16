import React ,{PureComponent} from "react";

export default class LCsnapBeforeUpdate extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            uName : "Jason",
            uState : "Chicago",
            puName : "Jason",
            puState : "Chicago"
        }
    }

    getSnapshotBeforeUpdate(prevState, prevProps){
        return {
            prevState,
            prevProps
        }
    }
  
    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
        this.setState({
            puName : prevProps.uName,
            puState : prevState.uState,
        })
    }

    textChange = (evt)=>{

        let target = evt.target;
        let value = target.value;
        let classList = target.classList;
        console.log(value)

        if (classList.contains("userName")) {
            this.setState({
                uName : value
            })    
        } else {
            this.setState({
                uState : value
            })
        }

        evt.preventDefault();
    }

    render(){
        return(
            <div className="form col-md-12">
                  <h1>Change check : {this.state.puName} </h1>
                  <h1>Change check : {this.state.puState} </h1>
                     <div className="col-md-8">
                         <label>User Name </label>
                         <input type="text" className="userName" value={this.state.uName} onChange={this.textChange}></input>
                     </div>
                     <div className="col-md-8">
                         <label>Home Address </label>
                         <input type="text" className="address" value={this.state.uState} onChange={this.textChange}></input>
                     </div>
                 </div>

        )
    }

}