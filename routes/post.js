const express = require('express')
const router = express()
const Post = require('../models/post')

const posts = []

//get all posts
router.get('/posts', (req, res) => {
    res.json({posts})
})

//get one post
router.get('/posts/:id', (req, res) => {
    const post = posts.filter(post => post._id === req.params.id)
    if(post == null){
        res.json({error:"no post with that id"})
    }
    res.json({post})
    

})

//create post
router.post('/post', (req, res) => {
    const {title, body} = req.body
    try {
        if(!title || !body){
            return res.status(422).json({error:"all fields are required"})
        }

        let post = new Post({
            title,
            body
        })

        posts.push(post)
        res.status(200).json({message:"post saved successfully"})

    } catch (error) {
        res.status(400).json({error})
    }
})

//update post
router.patch('/posts/:id', (req, res) => {
    
})

//delete post
router.delete('/posts/:id', (req, res) => {
    
})



module.exports = router;