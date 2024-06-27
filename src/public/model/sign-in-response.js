export class SignInResponse{
    constructor(
        Id= 0,
        Username="",
        Token = ""
    ) {
        this.id = Id;
        this.username = Username;
        this.token = Token;
    }
}