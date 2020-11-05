var copyObject = function (target){
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

var user = {
    name : 'gojaebeom',
    gender : 'male'
};

var user2 = copyObject(user);

if(user !== user2){
    console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name , user2.name);
console.log(user === user2);