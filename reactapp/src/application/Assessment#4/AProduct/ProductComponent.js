import React,{Component} from "react";

export default class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : props.Product.name,
            price: props.Product.price,
            desc : props.Product.desc,
            rating : props.Product.rating
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;
    
        if(classList.contains("name")){
            this.setState({
                name : value
            })
        }else if (classList.contains("price")) {
            this.setState({
                price : value
            })
        } else if (classList.contains("desc")) {
            
            this.setState({
                desc : value
            })
        } else {
            this.setState({
                rating : value
            })
        }    
    }

    SubmitProduct = (evt)=>{
    
        this.props.Submit(this.state)
        evt.preventDefault()
    }

    render(){
        return(
            <>
                <h1>Product Submit Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Product Name</b>
                            <input type="text" className="form-control col-md-6 name" 
                                    value={this.state.name} 
                                placeholder="Product Name" onChange={this.onTextChange} maxLength={40}/>
            
                            </div>
                            <div className="col-md-12">
                                    <b>Price</b>
                                    <input type="text" className="form-control col-md-6 price" value={this.state.price} 
                                        placeholder="Price" onChange={this.onTextChange} maxLength={40}/>
                                </div>
                                <div className="col-md-12">
                                <b>Description </b>
                                    <input type="text" className="form-control col-md-6 desc" value={this.state.desc} 
                                            placeholder="Description" onChange={this.onTextChange} />
                                </div>
                            
                                <div className="col-md-12">
                                    <b>Rating </b>
                                    <input type="number" className="form-control col-md-6 rating" value={this.state.rating} 
                                    placeholder="Mobile" maxLength="1"
                                    onChange={this.onTextChange} />
                                </div>

                                <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                        value={"Submit-up"} 
                                        onClick={this.SubmitProduct}/>
                                    
                        </div>
                </section>
            </>
        )
    }
}

Product.defaultProps = {
    Product : {
        name : "Lady Shose",
        price : 20,
        desc : "It is beautiful and nice",
        rating : 5
    }
}
