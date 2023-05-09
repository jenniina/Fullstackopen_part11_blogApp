const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs', {
    title: 1,
    author: 1,
    url: 1,
  })
  response.json(users)
})

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body
  const existingUser = await User.findOne({ username })

  if (!username || !name || !password)
    response.status(400).json({ error: 'Please set all fields' })
  else if (existingUser) {
    return response.status(400).json({ error: 'username is not available' })
  } else if (username.length < 3)
    response.status(400).json({ error: 'Username too short' })
  else if (password.length < 8)
    response.status(400).json({ error: 'Password too short' })
  else {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
      username,
      name,
      passwordHash,
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)
  }
})

module.exports = usersRouter
