import {Human} from "./Human.js";
import {arr} from "./Electronics.js";
import {sll} from "./Seller.js";

function Buyer(name, surName, id,role,money)
{
    Human.call(this,name,surName,id,role,money)
    this.role='buyer';


}

Buyer.prototype=Object.create(Human.prototype)
Buyer.prototype.constructor=Buyer

Buyer.prototype.buyProduct=function (id,Buyer){

    let pr=arr[id].cost
            Buyer.money-=pr;
 sll.sellProduct(id,sll);

}


export let buyer=new Buyer("Pavel","Varosyan",0,"buyer",98000000)