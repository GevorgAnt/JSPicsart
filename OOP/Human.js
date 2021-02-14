export function Human(name, surName, id, role,money)
{
    this.name=name
    this.surName=surName
    this.id=id
    this.role=role
    this.money=money
}

Human.prototype.NameSurname=function () {
    console.log(this.id +" "+this.name+" "+this.surName+" "+this.role+" "+this.money);
}

