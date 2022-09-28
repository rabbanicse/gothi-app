export class LocationStatus{
    Lat:string;
    Lng:string;
    constructor(init?: Partial<LocationStatus>) {
        Object.assign(this, init);
      }
  }