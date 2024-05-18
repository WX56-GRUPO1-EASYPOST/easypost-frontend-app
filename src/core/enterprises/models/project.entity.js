export class ProjectEntity {
    constructor(id=0,projectName="",clientName="",location="",clientImage="") {
        this.id = id;
        this.projectName = projectName;
        this.clientName = clientName;
        this.location = location;
        this.clientImage = clientImage;
    }
}