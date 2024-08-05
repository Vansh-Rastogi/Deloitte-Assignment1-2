const { v4: uuidv4 } = require('uuid');
const { toHeaderCase } = require('js-convert-case');

let usersArray = [
    { uname: "steve jobs", email: "STevE@gmail.com", cartId: "" },
    { uname: "smith jobs", email: "SmIth@gmail.com", cartId: "" },
    { uname: "Jones", email: "JoneS@gmail.com", cartId: "" },
    // Add more users as needed
];

usersArray = usersArray.map(user => {
    user.cartId = uuidv4().toUpperCase();
    user.uname = toHeaderCase(user.uname);
    user.email = user.email.toLowerCase();
    return user;
});

usersArray.forEach(user => {
    console.log(`User Id = ${user.uname}, Email = ${user.email}, cartId = ${user.cartId}`);
});
