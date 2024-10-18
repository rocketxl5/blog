const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

/**
 * GET /
 * Home
*/
router.get('', async (req, res) => {
    const locals = {
        title: "In Cognito Blog",
        desc: "Simple Blog using NodeJs Express and MongoDB"
    }

    try {
        const data = await Post.find()
        res.render('index', { locals, data })
    } catch (error) {
        console.log(error)
    }
})

/**
 * GET /
 * About
*/
router.get('/about', (req, res) => {
    res.render('about', {
        currentRoute: '/about'
    });
});

/**
 * GET /
 * Contact
*/
router.get('/contact', (req, res) => {
    res.render('contact', {
        currentRoute: '/contact'
    });
});

module.exports = router

// function insertPostData() {
//     Post.insertMany([
//         {
//             title: "Building a blog",
//             body: "This building the blog"
//         },
//         {
//             title: "Writing a blog",
//             body: "This writing the blog"
//         },
//         {
//             title: "Creating a blog",
//             body: "This creating the blog"
//         },
//         {
//             title: "Updating a blog",
//             body: "This updating the blog"
//         },
//         {
//             title: "Deleting a blog",
//             body: "This deleting the blog"
//         },
//         {
//             title: "Ignoring a blog",
//             body: "This ignoring the blog"
//         },
//         {
//             title: "Reconsidering a blog",
//             body: "This reconsidering the blog"
//         },
//         {
//             title: "Thinking a blog",
//             body: "This thinking the blog"
//         },
//         {
//             title: "Crashing a blog",
//             body: "This crashing the blog"
//         },
//         {
//             title: "Simmering a blog",
//             body: "This simmering the blog"
//         },
//         {
//             title: "Pondering a blog",
//             body: "This pondering the blog"
//         },
//         {
//             title: "Exploding a blog",
//             body: "This exploding the blog"
//         },
//     ])
// }

// insertPostData()