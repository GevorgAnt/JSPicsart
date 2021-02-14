import {sll} from "./Seller.js"
import {arr, Electronics} from "./Electronics.js"
import {buyer} from "./Buyer.js"

function Store (){
        this.Seller=sll
    this.Electronics=arr;

}
Store.prototype.addProduct=function (electronics){

        arr.push(electronics)

}


let store=new Store()

store.Seller.NameSurname();
console.log(store.Electronics)

buyer.buyProduct(0,buyer)


store.Seller.NameSurname();
console.log(store.Electronics)

store.addProduct(new Electronics("Heraxos","LG",6,356000))

console.log(store.Electronics)
