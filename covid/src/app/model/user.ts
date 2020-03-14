export class User {
    public _id: String;
    public name: String;
    public email: String;
    public password: String;

  constructor(email: String, password?: String, id?:String, name?:String) {
    this.email = email;
    this.password = password;
    this._id = id;
    this.name = name;
  }
}
