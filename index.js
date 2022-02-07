const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hey',
        message: 'Insert a string (checks for email and console logs result)',
        processFunc: function (email) {
            if(email.match(".*@+.*")){
                console.log('This email is valid')
            }else {
                console.log('This is not a valid email')
            }
        }
    })
})

app.listen(4000, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('App listening on port 4000')
    }
})
