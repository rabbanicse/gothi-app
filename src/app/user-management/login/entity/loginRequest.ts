export class LoginRequest{
    phoneNo:string;
    password:string;
    userType:number;
    constructor(init?: Partial<LoginRequest>) {
        Object.assign(this, init);
      }
  }