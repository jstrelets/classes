
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

        users = curSize.length;
    }

    class SuperUser extends User {
        constructor(name, lastName, id) {
            super(name, lastName, id)
        }

        #token = 'secret token';

        createUser(name, lastName) {
            const user = new User;
            user = {name, lastName};
            Company.curSize += 1;
            return user;
        }
        
        deleteUser(id) {

        }

    }

    // SuperUser.createUser('adam', 'smith');
    // console.log();

    let yojji = new Company;

    SuperUser.createUser(adam, smith);

    console.log(yojji.curSize);

    window.Company = Company;
})();




