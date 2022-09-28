export class OtpPost{
    mobileNo:string;
    otp:string;
    constructor(init?: Partial<OtpPost>) {
        Object.assign(this, init);
      }
  }