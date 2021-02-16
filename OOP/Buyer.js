const {Human}=require("./Human.js");
const {arr}=require("./Electronics") ;



function Buyer(name, surName, id,wish,money)
{
    Human.call(this,name,surName,id,money)
    this.role='buyer';
    this.wish=wish;

}
Buyer.prototype=Object.create(Human.prototype)
Buyer.prototype.constructor=Buyer

Buyer.prototype.buyProduct=function (id,Buyer,Seller){
    let pr=arr[id].cost
    Buyer.money-=pr;
    Seller.sellProduct(id,Seller);
}

Buyer.prototype.lookProduct=function (product){
    product.info();
}


exports.buyer=new Buyer("Pavel","Varosyan",0,"Phone",980000)