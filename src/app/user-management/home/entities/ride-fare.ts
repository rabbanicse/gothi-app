export class RideFareModel {
    baseFare: number;
    distance: number;
    kmPrice: number;
    minFare: number;
    rideId: number;
    rideName: string;
    totalFare: number;
    waitingCharge: number;
        constructor(init?: Partial<RideFareModel>) {
            Object.assign(this, init);
        }
    }