export class RideRequestModel {
    destination: string;
    destination_latitude: number;
    destination_longitude: number;
    driver_id: number;
    duration: number;
    fare: number;
    passenger_id: number;
    payment_type: number;
    pickup_location: string;
    ride: number;
    ride_category: number;
    total_fare: number;
    constructor(init?: Partial<RideRequestModel>) {
        Object.assign(this, init);
    }
}