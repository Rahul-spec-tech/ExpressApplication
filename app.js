const express = require('express');
const bodyParser=require('body-parser');
const port = 8031;
const app = express();
app.use(bodyParser.json());
// app.get('/home', (req, res) => {
//     res.send('Blog Home Page');
// });

// app.get('/admin', (req, res) =>{
//     res.send('Admin Page');
// });
app.get('/getPost', (req, res) => {
    res.status(200).send({
        title: "js",
        content: "Developing using Express js framework"
    });
});
app.post('/addPost/:id',(req, res) =>{
    const {id}=req.params;
    const {title}=req.body;
    const {content}=req.body;
    if(!title){
        res.status(418).send({message: "The title should be mentioned"});
    }
    else{
        console.log('The Id: ${id} for the Title: ${title} and its content is: ${content}');
        res.status(201).send({ message: "Post added successfully", data: req.body });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
