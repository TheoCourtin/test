export class Covid {
    public _id: String;
    public province: String;
    public country: String;
    public lon: String;
    public lat: String;

  constructor(province: String, country?: String, id?:String, lon?:String, lat?:String) {
    this.province = province;
    this.country = country;
    this._id = id;
    this.lon = lon;
    this.lat = lat;
  }
}
