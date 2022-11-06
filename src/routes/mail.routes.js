import { Router } from 'express'
import * as mailController from '../controllers/mail.controller.js'

const router = Router()

router.post('/contact', mailController.contact)

export default router
