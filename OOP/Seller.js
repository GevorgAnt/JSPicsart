
function Seller(name, surName, id, role)
{
    Human.call(this,name,surName,id,role)
    this.productes=[];
    this.money=0;
}

Seller.prototype=Object.create(Human.prototype)
Seller.prototype.constructor=Seller

Seller.prototype.addProduct=function (electronics){
    if(typeof electronics===Electronics)
    this.productes.push(electronics)
    else
        console.log("Wrong value")
}

Seller.prototype.sellProduct=function (index){
    let product = this.productes[index]
    this.productes.splice(index)
    this.money+=product.money
}

