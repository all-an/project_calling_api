import express from 'express';


const router = express.Router();

const users = [
    {
        firstName: "James",
        lastName: "Gosling",
        age: 25
    },

    {
        firstName: "Brendan",
        lastName: "Eich",
        age: 19
    } 
] 

//all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');
    
    console.log(req.body);
    //users.push()
    
    res.send('POST ROUTE REACHED');
})

export default router;