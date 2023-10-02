import * as ActionTypes2 from "../actionTypes2"
import axios from "axios";


export const AddProductToStore = (newProduct)=>{
    return {
        type : ActionTypes2.AddProductToStore,
        payload : newProduct
    }
}

export const saveProductToDb = (product)=>{
    return (dispatch)=>{
       console.log("called by dispatch and synced by thunk");
       
       axios.post("http://localhost:9000/product/api/submit",
               product
           )
           .then((savedProduct)=>{
               let submitProduct = savedProduct.data;
               console.log(submitProduct)

               dispatch(AddProductToStore(submitProduct))
           })
           .catch((err)=>{
               console.log(err)
           })
    }
}