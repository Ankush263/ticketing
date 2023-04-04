import express from 'express'

const router = express.Router()

router.post('/api/v1/users/signout', (req, res) => {
  res.send('Hii there!')
})

export { router as signoutRouter }
