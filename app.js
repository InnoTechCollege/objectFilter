var users = [
    {
        username: "Alex",
        userAge: 17,
        isSubscribed: false,
        friendList: ["Joe", "Mark", "Dan", "Nick"],
        job: {
            title: "cashier",
            wage: 15.25,
            company: "WalMart",
            coworkers: ["Tom", "Jerry", "Bob", "Sie"]
        }
    },
    {
        username: "Joe",
        userAge: 18,
        isSubscribed: true,
        friendList: ["Joe", "Mark", "Dan", "Nick"],
        job: {
            title: "cashier",
            wage: 15.25,
            company: "WalMart",
            coworkers: ["Tom", "Jerry", "Bob", "Sie"]
        }
    },
    {
        username: "Tom",
        userAge: 21,
        isSubscribed: false,
        friendList: ["Joe", "Mark", "Dan", "Nick"],
        job: {
            title: "Manager",
            wage: 20,
            company: "WalMart",
            coworkers: ["Tom", "Jerry", "Bob", "Sie"]
        }
    },
    {
        username: "Joe",
        userAge: 18,
        isSubscribed: true,
        friendList: ["Joe", "Mark", "Dan", "Nick"],
        job: {
            title: "cashier",
            wage: 15.25,
            company: "WalMart",
            coworkers: ["Tom", "Jerry", "Bob", "Sie"]
        }
    },
    {
        username: "Patrick",
        userAge: 21,
        isSubscribed: false,
        friendList: ["Joe", "Mark", "Dan", "Nick"],
        job: {
            title: "Manager",
            wage: 20,
            company: "WalMart",
            coworkers: ["Tom", "Jerry", "Bob", "Sie"],
        },
    },
];

function filterManagers(user) {
    if(user.job.title == "Manager") {
        return true;
    } else {
        return false;
    }
}

var managers = users.filter(filterManagers);
console.log(managers);
