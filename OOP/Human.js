function Human(name, surName, id, role)
{
    this.name=name
    this.surName=surName
    this.id=id
    this.role=role
}

Electronics.prototype.NameSurname=function () {
    console.log(this.id +" "+this.name+" "+this.surName+this.role);
}

