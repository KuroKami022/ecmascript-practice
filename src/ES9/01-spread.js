const user = {username: 'ural', age: 29, country:'VE'};
const {username, ...values } = user;
console.log(username);
console.log(values);