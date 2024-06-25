export class LocationEntity{
    constructor(department="",province="",district="",
                locality="",address="",reference="") {
        this.department=department;
        this.province=province;
        this.district=district;
        this.locality=locality;
        this.address=address;
        this.reference=reference;
    }
}