const express = require('express')
const router = express.Router();
const db = require('../config/database')
const Gig = require('../models/Gig')

// Get gig list
router.get('/', (req, res) => 
    Gig.findAll()
    .then(gigs => {console.log(gigs)
    res.sendStatus(200)})
    .catch(err => console.log(err)))

// Add a gig
router.get('/add', (req, res) => { // wouldn't normally do this, just to demonstrate
    const data = {
        title: 'Looking for a react developer',
        technologies: 'react, javascript, html, css',
        budget: '$3000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus mauris, convallis non eleifend feugiat, tristique eu tellus. Curabitur rutrum laoreet sodales. Nullam vestibulum turpis sed neque scelerisque dignissim. Mauris quis magna nunc. Nunc sagittis id sem nec tincidunt. Aliquam pretium eros eu tempor commodo. Nullam vitae arcu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend nisl sed dignissim luctus. Aenean at pulvinar eros. Fusce odio elit, cursus in neque eu, sodales egestas ante. Donec felis arcu, gravida nec ligula a, ultricies tempus ipsum. Aenean in lorem quis neque consequat dictum. Proin mattis sapien at ante lobortis condimentum. Nulla vitae sodales nunc. Phasellus sed sagittis elit, at congue turpis.',
        contact_email: 'user1@gmail.com'
    }

    let { title, technologies, budget, description, contact_email } = data

    // Insert into table 
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err))
})



// EXPORT
module.exports = router;
