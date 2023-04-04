import express from 'express'

const router = express.Router()

router.post('/api/v1/users/signin', (req, res) => {
  res.send('Hii there!')
})

export { router as signinRouter }
