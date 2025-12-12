import express from 'express'
import { submitContact } from '../controllers/contactController.js'
import Contact from '../models/Contact.js'

const router = express.Router()

router.post('/', submitContact)

export default router
