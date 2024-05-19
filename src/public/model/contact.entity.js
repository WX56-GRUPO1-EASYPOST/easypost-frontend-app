export class ContactEntity{
    constructor(id=0,contactName="",urlToImage="",messagesList=[]){
        this.id=id;
        this.contactName=contactName;
        this.urlToImage=urlToImage;
        this.messagesList=messagesList;
    }
}