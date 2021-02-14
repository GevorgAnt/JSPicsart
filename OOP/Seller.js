import {Human} from "./Human.js"
import {arr} from "./Electronics.js"
export function Seller(name, surName, id, role,money)
{
    Human.call(this,name,surName,id,role,money)

    this.role='seller';
}

Seller.prototype=Object.create(Human.prototype)
Seller.prototype.constructor=Seller



Seller.prototype.sellProduct=function (index,Seller){
    let product = arr[index]

    Seller.money+=product.cost
}

export let sll=new Seller("gev","Antonyan",0,"Seller",0)
