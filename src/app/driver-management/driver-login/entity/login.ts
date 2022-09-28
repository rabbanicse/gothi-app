export class Login{
    PhoneNo:string;
    status:boolean;
    otp:string;
    constructor(init?: Partial<Login>) {
        Object.assign(this, init);
      }
}

