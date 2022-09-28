export class Register{
    phoneNo:string;
    firstName:string;
    lastName:string;
    gender:number;
    password:string;
    constructor(init?: Partial<Register>) {
        Object.assign(this, init);
      }
}