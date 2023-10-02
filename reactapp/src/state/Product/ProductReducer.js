//defines the initial state for user and also returns user reducer with logic to create new user state
import * as ActionTypes2 from "../actionTypes2";

const Initial_State = {
    Product : {
        name : "something",
        price : 25,
        desc : "It is good for everyone",
        rating : 4
    }
}


//write callback/ reducer to generate new state upon action change

let ProductReducer = (state = Initial_State, action)=>{
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {

        case ActionTypes2.AddProductToStore:
            //...state : {User, Product ...etc}
            //returning all other states as it is but updating User using payload
            return {...state, Product : action.payload}

        default:
            return state
    }
}

export default ProductReducer;