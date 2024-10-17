const express = require('express')

const router = express.Router()

// Routes
router.get('', (req, res) => {
    const locals = {
        title: "In Cognito Blog",
        desc: "Simple Blog using NodeJs Express and MongoDB"
    }
    res.render('index', { locals })
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