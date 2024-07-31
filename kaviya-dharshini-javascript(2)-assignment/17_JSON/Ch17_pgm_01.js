const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON);
// Output: '["HTML","CSS","JS","React","Node","Python"]'
const ageJSON = JSON.stringify(age);
console.log(ageJSON);
// Output: '250'
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);
// Output: 'true'
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
/* Output:
{
  "firstName":"Asabeneh",
  "lastName":"Yetayehe",
  "age":250,
  "isMarried":true,
  "skills":["HTML","CSS","JS","React","Node","Python"]
}
*/
  

const studentPartialJSON = JSON.stringify({ firstName: student.firstName, lastName: student.lastName, skills: student.skills });
console.log(studentPartialJSON);
/* Output:
{
  "firstName":"Asabeneh",
  "lastName":"Yetayehe",
  "skills":["HTML","CSS","JS","React","Node","Python"]
}
*/


const users = JSON.parse(txt);
console.log(users);
/* Output:
{
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
*/
   

let maxSkills = 0;
let skillfulUser = '';

for (const user in users) {
    if (users.hasOwnProperty(user)) {
        const numSkills = users[user].skills.length;
        if (numSkills > maxSkills) {
            maxSkills = numSkills;
            skillfulUser = user;
        }
    }
}

console.log(`${skillfulUser} has the most skills with ${maxSkills} skills.`);
// Output: 'Asab has the most skills with 8 skills.'




