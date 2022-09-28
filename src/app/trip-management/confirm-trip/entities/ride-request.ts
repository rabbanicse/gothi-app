export class RideRequestModel {
    destination: string;
    destination_latitude: number;
    destination_longitude: number;
    duration: number;
    passenger_id: number;
    pickup_location: string;
    ride: number;
    constructor(init?: Partial<RideRequestModel>) {
        Object.assign(this, init);
    }
}