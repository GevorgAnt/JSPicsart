import {sll} from "./Seller.js"
import {arr, Electronics} from "./Electronics.js"
import {buyer} from "./Buyer.js"

function Store(seller,ellArr) {
    this.seller = seller
    this.ellArr = ellArr
}

Store.prototype.addProduct = function (array,name, mark, id, cost) {
    array.push(new Electronics(name, mark, id, cost))
}


let store = new Store(sll,arr)

store.seller.NameSurname();
console.log(store.ellArr)

buyer.buyProduct(0, buyer,sll)


store.seller.NameSurname();


store.addProduct(arr,"Heraxos", "LG", 6, 356000)

console.log(store.ellArr)


buyer.lookProduct(arr[0])