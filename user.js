export class User{
    //members
    id;
    email;
    password;
    phone;
    //constructor
    constructor(id, eml, pwd, ph){
        this.id = id;
        this.email = eml;
        this.password = pwd;
        this.phone =ph;
    }
    //methods
    getUserEmail(){
      return this.email;
    }
}