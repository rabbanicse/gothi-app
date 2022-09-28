export class Driver {
currentLocation: string;
distance: number;
id: number;
latitude: string;
longitude: string;
name: string;
phoneNo: string;
registrationNo: string;
rideId: number;
rideName: string;
    constructor(init?: Partial<Driver>) {
        Object.assign(this, init);
    }
}