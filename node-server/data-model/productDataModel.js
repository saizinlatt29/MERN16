let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;
let productSchema = new schemaObj({
    name : {type: String, required : true},
    price : {type : Number, required : true},
    desc: {type:String, required : true},
    rating: Number
});

let ProductModel =mongooseObj.model("product",productSchema);
module.exports =ProductModel;