function newUser(name, age, country) {
    var name = name || 'Luis';
    var age = age || 29;
    var country = country || 'VE';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');

// ecmascript6

function newAdmin(name = 'Luis', age = 29, country = 'RU') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('ANA', 28, 'PE');