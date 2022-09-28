  export class Otp{
    mobileNo:string;
    otp:string;
    constructor(init?: Partial<Otp>) {
        Object.assign(this, init);
      }
}

 