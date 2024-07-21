const express = require('express')
const passport = require('passport')
const session = require('express-session')
const strat = require('./auth/passport-linkedin')
const port = process.env.PORT || 4000

const app = express()

// https://www.linkedin.com/oauth/v2/authorization?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Flinkedin%2Fcallback&scope=r_emailaddress%20r_liteprofile&state=0QYdGsUeVaWDAK1ebdjfTMmu&client_id=77wh2farq79mh3

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send(`<center style="font-size:160%"> <p>This is Home Page </p>
//     <p>User is not Logged In</p>
//     <p style="cursor:pointer;"  onclick="window.location='/auth/linkedin'" >LOGIN</p>
//     </center>
//     `);
// })

app.get("/", (req, res) => {
    if (req.user) {
        const name = req.user.name.givenName;
        const family = req.user.name.familyName;
        const photo = req.user.photos[0].value;
        const email = req.user.emails[0].value;
        res.send(
            `<center style="font-size:140%"> <p>User is Logged In </p>
      <p>Name: ${name} ${family} </p>
      <p> Linkedn Email: ${email} </p>
      <img src="${photo}"/>
      </center>
      `
        )
    } else {
        res.send(`<center style="font-size:160%"> <p>This is Home Page </p>
    <p>User is not Logged In</p>
    <p style="cursor:pointer;"  onclick="window.location='/auth/linkedin'">LOGIN</p>
    </center>
    `);
    }
});

app.use('/auth', require('./routes/linkedin'))

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port)
})