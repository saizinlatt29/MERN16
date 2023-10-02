import Product from "./ProductComponent";
import { connect } from "react-redux";
import { AddProductToStore, saveProductToDb } from "../../../state/Product/ProductAction";

let mapstateToProps = (store)=>{
    return {
        Product : store.ProductReducer.Product //can be accessed as props.User
    }
}

let mapdispatchToProps = (dispatch)=>{
    return {
        Submit : (newProduct)=>{
            dispatch(saveProductToDb(newProduct))
        }
    }
}

export default connect(mapstateToProps,mapdispatchToProps)(Product)
