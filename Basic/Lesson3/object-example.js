var myInfo = {
    name: 'Phan Văn Tài',
    address: 'Quảng Nam',
    'hello-world': 'Hehe',
    getName: function () {
        return myInfo.name
    }
};

myInfo.age = 18;
myInfo['hello'] = 'Say hi';
console.log(myInfo)

var emailKey = 'email';
myInfo[emailKey] = 'taiphanvan2403@gmail.com'
console.log(myInfo)

delete myInfo['hello-world']
console.log(myInfo)

console.log(myInfo.getName())