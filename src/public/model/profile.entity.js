export class ProfileEntity {
    constructor(id = 0, fullContact = "", fullAddress = "", fullDetails = "",type="") {
        this.id = id;
        this.fullContact = fullContact;
        this.fullAddress = fullAddress;
        this.fullDetails = fullDetails;
        this.type = type;
    }
}