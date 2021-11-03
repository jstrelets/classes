
(function () {
    class User {
        constructor(name, lastName, isAdmin) {
            this.name = name;
            this.lastName = lastName;
            this.isAdmin = isAdmin;
            this.id = Math.floor(Math.random() * 100);
        }
        role = null;
    };

    class Company {
        constructor(name, maxSize) {
            this.name = name;
            this.maxSize = maxSize;
        }
        curSize = 0;
        users = [];

    }

    class Admin extends User {

        #token = 'secret token';

        createUser(name, lastName) {
            let user = new User(name, lastName);
            return user;
        }
        
        deleteUser(id) {

        }

    }


    let yojji = new Company();

    let admin = new Admin();

    yojji.users.push(admin.createUser('adam', 'smith'));

    yojji.curSize++;
   

    console.log(yojji.users);

    window.Company = Company;
})();




