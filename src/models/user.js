export default class User{
    constructor(username, firstName, lastName, password, address, email, phoneNumber, 
        role, createTime, reservations, token, id){
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.createTime = createTime;
        this.token = token;
        this.reservations = reservations;
        this.id = id;
    }
}