export class DriverList {
    destinationLatitude: string;
    destinationLongitude: string;
    phoneNumber: string;
    pickupLocation: string;
    userLatitude: string;
    userLongitude: string
        constructor(init?: Partial<DriverList>) {
            Object.assign(this, init);
        }
    }