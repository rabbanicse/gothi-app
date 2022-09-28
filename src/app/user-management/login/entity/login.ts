export class Login{
    PhoneNo:string;
    status:boolean = false;
    otp:string;
    constructor(init?: Partial<Login>) {
        Object.assign(this, init);
      }
}


