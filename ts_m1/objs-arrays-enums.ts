enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
    name: "Saúl",
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

console.log(person);

for(const hobby of person.hobbies){
    console.log(hobby);
}