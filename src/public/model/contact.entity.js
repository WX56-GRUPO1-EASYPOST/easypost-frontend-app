export class ContactEntity{
    /*constructor(id=0,contactName="",urlToImage="",messagesList=[]){
        this.id=id;
        this.contactName=contactName;
        this.urlToImage=urlToImage;
        this.messagesList=messagesList;
    }*/
    constructor(id=0,name="",urlToImage="") {
        this.id = id;
        this.name=name;
        this.urlToImage=urlToImage;
    }
}