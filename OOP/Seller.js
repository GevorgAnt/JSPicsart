const {Human}=require( "./Human.js")
const {arr}= require("./Electronics.js")
 function Seller(name, surName, id,money)
{
    Human.call(this,name,surName,id,money)
    this.role="seller"
}

Seller.prototype=Object.create(Human.prototype)
Seller.prototype.constructor=Seller



Seller.prototype.sellProduct=function (index,Seller){
    let product = arr[index]
    Seller.money+=product.cost
}

exports.sll=new Seller("gev","Antonyan",0,0)
