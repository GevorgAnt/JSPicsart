 function Human(name, surName, id,money)
{
    this.name=name
    this.surName=surName
    this.id=id
    this.money=money
}

Human.prototype.NameSurname=function () {
    console.log(this.id +" "+this.name+" "+this.surName+" "+this.money);
}

exports.Human=Human