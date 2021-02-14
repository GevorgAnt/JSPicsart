 export function Electronics(name, mark, id,cost)
{
    this.name=name
    this.mark=mark
    this.id=id
    this.cost=cost
}

Electronics.prototype.info= function () {
    console.log(this.id +" "+this.name+" "+this.mark+" "+this.cost);
}

let el1=new Electronics("Notebook","ASus",0,1500000)
let el2=new Electronics("PC","HP",1,155890)
let el3=new Electronics("Phone","Iphone",2,510000)

 export let arr=[el1,el2,el3];



