export class Personne {
    public _id: String;
    public nom: String;
    public long: String;
    public lati: String;

  constructor(id?: String, nom?: String, long?: String, lati?: String) {
    this._id = id;
    this.nom = nom;
    this.long = long;
    this.lati = lati;
  }
}
