import React, {PureComponent} from "react";

export default class  LCshouldComUpdate extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            uName : "Jason",
            uState : "Chicago",
            number : 10
        }

    }
    shouldComponentUpdate(nextProps, nextState){
             console.log(nextProps, nextState)
    
             if (nextState.uName=== this.state.uName && nextState.uState === this.state.uState) {
                return false //no need to call render method as states are same
             } else {
                 return true
            }       
         }

    textChange = (evt)=>{

        let target = evt.target;
        let value = target.value;
        let classList = target.classList;
        console.log(value)

        if (classList.contains("userName")) {
            this.setState({
                uName : value,
                number : Math.floor(Math.random() * 100)
            })    
        } else {
            this.setState({
                uState : value,
                number : Math.floor(Math.random() * 100)
            })
        }

        evt.preventDefault();
    }

	render() {
		return (
            <div className="form col-md-12">
                  <h1>Change check : {this.state.number} </h1>
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