const express = require('express')
const passport = require('passport');
const router = express.Router()

router.get(
    "/linkedin",
    passport.authenticate("linkedin",
        // {
        // state: process.env.SESSION_SECRET,
        // passReqToCallback: true,
        // }
    ),
    // (req, res) => {}
)

router.get(
    '/linkedin/callback',
    passport.authenticate(
        'linkedin',
        {
            successRedirect: '/auth/login/success',
            failureRedirect: '/fail'
        }
    )
)

router.get('/login/success',
    (req, res) => {
    console.log("sucesso")
    if(req.user) {
            res.json(req.user)
        }
})

router.get('/logout', (req, res) => {
    req.logout((error) => {
        if(error) { return }
        res.redirect('/')
    })
})

module.exports = router