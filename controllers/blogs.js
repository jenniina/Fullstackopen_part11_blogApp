const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

// const getTokenFrom = request => {
//   const authorization = request.get('authorization')
//   if (authorization && authorization.startsWith('Bearer ')) {
//     return authorization.replace('Bearer ', '')
//   }
//   return null
// }

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
    .populate('user', {
      username: 1,
      name: 1,
      id: 1,
    })
    .populate('comments')

  if (!blogs) return response.status(404).json({ error: 'Network error' })
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const body = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  } else {
    const user = await User.findById(decodedToken.id)
    //const user = request.user

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: !body.likes ? 0 : body.likes,
      user: user?.id,
    })
    if (!body.title || !body.author || !body.url)
      response.status(400).json({ error: 'Please fill in all the fields' })
    else {
      const savedBlog = await blog.save()

      user.blogs = user.blogs.concat(savedBlog.id)

      await user.save()

      response.status(201).json(savedBlog)
    }
  }
})
blogsRouter.get('/:id', async (request, response) => {
  const { id } = request.params
  const comments = await Blog.findById(id).populate('comments')
  response.json(comments)
})
blogsRouter.post('/:id/comments', async (request, response) => {
  const body = request.body
  const { id } = request.params

  const blog = await Blog.findById(id)

  const comment = new Comment({
    comment: body.comment,
    username: body.username,
  })
  if (!body.comment || !body.username)
    response.status(400).json({ error: 'Please fill in all the fields' })
  else {
    const savedComment = await comment.save()
    blog.comments = blog.comments?.concat(savedComment.id)
    await blog.save()

    response.status(201).json(savedComment)
  }
})

blogsRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }
  //const user = request.user

  const blog = await Blog.findById(request.params.id)

  const user = await User.findById(decodedToken.id)

  if (!Blog) return response.status(400).json({ error: 'No such resource' })
  else if (user.id.toString() !== blog.user.toString())
    response.status(401).json({ error: 'not authorized to remove' })
  else {
    await Blog.findByIdAndRemove(request.params.id)

    response.status(204).end()
  }
})

blogsRouter.put('/:id', async (request, response) => {
  const updatedBlog = await Blog.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
    }
  )

  if (!updatedBlog) {
    return response.status(404).json({ error: 'not found' })
  }

  response.status(200).json(updatedBlog)
})

module.exports = blogsRouter
