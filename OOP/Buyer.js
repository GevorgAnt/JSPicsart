import {Human} from "./Human.js";

function Buyer(name, surName, id,money)
{
    Human.call(this,name,surName,id)
    this.role='buyer';
    this.money=money;

}

Buyer.prototype=Object.create(Human.prototype)
Buyer.prototype.constructor=Buyer

Buyer.prototype.buyProduct=function (Electr){
    if(typeof Electr===Electronics)
        if(this.money>=Electr.cost)
            this.money-=Electr.cost;
    else
        console.log("Wrong value")
}

