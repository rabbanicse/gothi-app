import { DriverList } from "./driver-list";
import { RideFareModel } from "./ride-fare";

export class DriverLocaiton {
   phoneNumber:string;
   driverList:DriverList [] = new Array<DriverList>(); 
   rideFareModelList:RideFareModel [] = new Array<RideFareModel>(); 
        constructor(init?: Partial<DriverLocaiton>) {
            Object.assign(this, init);
        }
    }