//write a "person" class to hold all the details
class Person{
    constructor(firstname,lastname,age,gender,dob,email,phone,location){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender
        this.dob = dob;
        this.email = email;
        this.phone = phone;
        this.location = location;
}}

var p1 = new Person("John","Doe",20,"male","21jan2002","abc@gmail.com",987654321,"chennai");
var p2 = new Person("Sandy","M",18,"female","21jan2004","xyz@gmail.com",987456321,"chennai");
