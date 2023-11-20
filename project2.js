class Vehicle  {
    constructor(vehicleName, vehicleCompany, vehicleId){
        this.vehicleName = vehicleName;
        this.vehicleCompany = vehicleCompany;
        this.vehicleId = vehicleId;
    }
}
class Car extends Vehicle{
    constructor(carType){
        this.carType = carType;
    }
}
class Plane extends Vehicle{
    constructor(planeType){
        this.planeType = planeType;
    }
}
class Employee  {
    constructor(employeeName, employeeDateOfBirth, employeeId){
        this.employeeName = employeeName;
        this.employeeDateOfBirth = employeeDateOfBirth;
        this.employeeId = employeeId;
    }
}
class Driver extends Employee{
    constructor(licenceId){
        this.licenceId = licenceId;
    }
}
class Pilot extends Employee{
    constructor(licenceId){
        this.licenceId = licenceId;
    }
}
class Reserviation  {
    constructor(reservationDate, employeeId , vehiclesId ,reservationID){
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
        this.reservationId = reservationId; 
    }
}
