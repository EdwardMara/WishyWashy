const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')

const Worker = mongoose.model('Workers')
const Manager = mongoose.model('Managers')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = "superdupersecrethaha";

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      Worker.findById(payload.id)
        .then(user => {
          if (user) {
            return done(null, user)
          }
          return done(null, false)
        })
        .catch(err => console.log(err))
    })
  )
}
