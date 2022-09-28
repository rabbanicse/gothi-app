export class ForgotPassword {
    mobileNo: string;
    password: string;
        constructor(init?: Partial<ForgotPassword>) {
            Object.assign(this, init);
        }
    }