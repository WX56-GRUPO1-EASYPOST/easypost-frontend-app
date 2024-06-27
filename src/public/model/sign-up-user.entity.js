export class SignUpUser {
    constructor(
        Username="",
        Password="",
        Type="",
        Name       = "",
        Description= "",
        Ruc        = "",
        Phone      = "",
        Email      = "",
        Department = "",
        District   = "",
        Residential= ""
    ) {
        this.username = Username;
        this.password = Password;
        this.type = Type;
        this.Name = Name;
        this.Description = Description;
        this.Ruc = Ruc;
        this.Phone = Phone;
        this.Email = Email;
        this.Department = Department;
        this.District = District;
        this.Residential = Residential;
    }
}