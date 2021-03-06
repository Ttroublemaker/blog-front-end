import {
  service
} from './request'

export const login = (username, password) => service({
  method: 'POST',
  url: '/api/user/login',
  data: {
    username,
    password
  },
})

export const loginTest = () => service({
  method: 'GET',
  url: '/api/user/login-test',
})

export const getBlogList = (keyword = '') => service({
  method: 'GET',
  url: '/api/blog/list',
  params: {
    keyword
  }
})

export const getBlogDetail = (id) => service({
  method: 'GET',
  url: '/api/blog/detail',
  params: {
    id
  }
})

export const createNewBlog = ({ title, content }) => service({
  method: 'POST',
  url: '/api/blog/new',
  data: {
    title,
    content
  }
})

export const updateBlog = (id, { title, content }) => service({
  method: 'POST',
  url: '/api/blog/update?id=' + id,
  data: {
    title,
    content
  }
})

export const delBlog = (id) => service({
  method: 'POST',
  url: '/api/blog/del?id=' + id,
  data: {
    title,
    content
  }
})