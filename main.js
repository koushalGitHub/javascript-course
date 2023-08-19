const users = [
    {
        id:1,
        name:'koushal',
        isAtive:true,
        age:30
    },
    {
        id:1,
        name:'avtar',
        isAtive:true,
        age:30
    },{
        id:1,
        name:'heman',
        isAtive:true,
        age:30
    },{
        id:1,
        name:'vishal',
        isAtive:true,
        age:30
    },
]
const names=[];
// console.log(users);
for(i=0;i<users.length;i++){
    names.push(users[i].name);
}

console.log(names)

