import { v4 as uuidv4 } from 'uuid';

let users = [] 

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const createUser = (req, res) => {
     
    const user = req.body;   
    
    //const userId = uuidv4();
    //const userWithId = { ...user, id: uuidv4() }

    users.push({ ...user, id: uuidv4() });
    
    res.send(`User with the name ${user.firstName} added.`);
}

export const getUserById = (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUserById = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted.`);
}

export const updateUserById = (req, res) => {
    const { id } = req.params;
    let { firstName, lastName, age } = req.body;

    let user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} updated.`);
}

