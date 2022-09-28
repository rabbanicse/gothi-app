import { LocationStatus } from "./location";

export class LocationRequest{
    PhoneNo:string;
    UserType:number;
    StartAddress:string;
    StartLocation:LocationStatus;
    constructor(init?: Partial<LocationRequest>) {
        Object.assign(this, init);
      }
}