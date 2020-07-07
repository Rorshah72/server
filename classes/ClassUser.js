class User {
    name;
    secondname;
    role = 1;
   password;
     email;
    phone;
    id;
    constructor(name, secondname, password, email, phone) {
        this.name = name;
        this.secondname = secondname;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.id = 0;

    }

        getName() {
        return this.name;
    }
        setName(name) {
        this.name = name;
    }

        getSecondname() {
        return this.secondname;
    }
        setSecondname(secondname) {
        this.secondname = secondname;
    }
         getPassword() {
        return this.password;
    }
        setPassword(password) {
        this.password = password;
    }
        getEmail() {
        return this.email;
    }
        setEmail(email) {
        this.email = email;
    }
        getPhone() {
        return this.phone;

    }
        setPhone(phone) {
        this.phone = phone;
    }
        getRole() {
        return this.role;
    }
        setRole(role) {
        this.role = role;
    }
        setId(id) {
        this.id = id;
    }
        getId() {
        return this.id;

    }



}
module.exports = User;
