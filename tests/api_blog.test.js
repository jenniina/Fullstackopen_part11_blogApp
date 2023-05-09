const mongoose = require('mongoose')
const supertest = require('supertest')
const bcrypt = require('bcrypt')
const app = require('../app')
const api = supertest(app)
const helper = require('../utils/list_helper')
const Blog = require('../models/blog')
const User = require('../models/user')

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.initialBlogs.map(
    (blog) => new Blog({ ...blog, likes: blog.likes ? blog.likes : 0 })
  )
  const array = blogObjects.map((blog) => blog.save())

  await Promise.all(array)
})

describe('GET request testing:', () => {
  test('if blogs are returned as JSON', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  }, 10000)

  test('if all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })

  test('if the unique identifier property of the blog posts is id', async () => {
    const blogs = await Blog.find({})
    expect(blogs[0].id).toBeDefined()
  })
})

describe('Adding an entry', () => {
  let headers

  beforeEach(async () => {
    const newUser = {
      username: 'user',
      name: 'user',
      password: 'salmiakki',
    }

    await api.post('/api/users').send(newUser)

    const result = await api.post('/api/login').send(newUser)

    headers = {
      Authorization: `bearer ${result.body.token}`,
    }
  })

  test('if blog entries can be added', async () => {
    const newBlog = {
      title: 'Title of the Bloggo',
      author: 'Author of the Blog',
      url: 'the-blog.url',
    }

    await api
      .post('/api/blogs')
      .set(headers)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    expect(response.body[helper.initialBlogs.length].title).toBe(newBlog.title)
    expect(response.body[helper.initialBlogs.length].author).toBe(
      newBlog.author
    )
    expect(response.body[helper.initialBlogs.length].url).toBe(newBlog.url)
    expect(response.body[helper.initialBlogs.length].likes).toBe(
      !newBlog.likes ? 0 : newBlog.likes
    )
    expect(response.body).toHaveLength(helper.initialBlogs.length + 1)
  }, 10000)

  test('if no title, fails with 400', async () => {
    const newBlog = {
      author: 'Authora',
      url: 'addre.ss',
    }

    await api.post('/api/blogs').set(headers).send(newBlog).expect(400)
  })

  test('if no author, fails with 400', async () => {
    const newBlog = {
      title: 'Title Magnifique',
      url: 'add.ress',
    }

    await api.post('/api/blogs').set(headers).send(newBlog).expect(400)
  })

  test('Updating likes in a post', async () => {
    const response = await api.get('/api/blogs')
    const blogToUpdate = await response.body[0]

    blogToUpdate.likes = 100

    await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .set(headers)
      .send(blogToUpdate)
      .expect(200)

    const blogsAfterUpdate = await api.get('/api/blogs')
    const likes = Number(blogsAfterUpdate.body[0].likes)

    expect(likes).toBe(100)
  }, 10000)
})

afterAll(async () => {
  await mongoose.connection.close()
})
