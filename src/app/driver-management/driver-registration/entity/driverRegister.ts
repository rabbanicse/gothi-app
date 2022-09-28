export class DriverRegister{
    fullName:string;
    nickName:string;
    email:string;
    gender:string;
    city:string;
    nid:string;
    password:number;
    confrimPassword:number;
    agenId:number;
    drivingLicenseNo:number;
    hasVehicle:string;
    uploadPhoto:string;
    uploadDrivingLicens:string;
    vehicleCategory:string;
    vehicleClass:string;
    vehicleRegistrationNo:number;
    expireDate:string;
    engineNo:number;
    seatCapacityNo:number;
    vehicleOwnerName:string;
    vehicleOwnerNid:number;
    vehicleOwnerAddress:number;
    vehicleOwnerNidUploadFront:string;
    vehicleOwnerNidUploadBack:string;
    vehicleOwnerUploadRegCard:string
    constructor(init?: Partial<DriverRegister>) {
        Object.assign(this, init);
      }
}