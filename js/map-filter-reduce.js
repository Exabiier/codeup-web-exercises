const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeUserLangues = users.filter(lan => {
    return lan.languages.length >= 3;
})

let userEmails = users.map(email=>{
    return email.email;
});

let longestEmail = users.reduce((acc,cur, index, array) =>{
    if(acc.length < cur.email.length){
        return cur.email;
    } else{
        return acc
    }
}, '')

let allNames = users.reduce((acc, curr, index, array) => {
           return `${acc} ${curr.name}`;
}, `Your instructors are:`)

console.log(allNames)

let exp = users.reduce((total, user) => {
    return total + users.yearsOfExperience;
})

//why do you need the else and the cur bigger

// let longestEmail = users.reduce(function(longest, user){
//     if(longest.length < user.email.length) {
//         return user.email;
//     } else {
//         return longest;
//     }
// },'');