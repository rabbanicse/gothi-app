import { Driver } from "./driver";

export class UpdateLocation {
    latitude: string;
    longitude: string;
    phoneNumber: string;
    startAddress: string;
    userType: number;
    driverList:Driver[]=[];
    constructor(init?: Partial<UpdateLocation>) {
        Object.assign(this, init);
    }
}