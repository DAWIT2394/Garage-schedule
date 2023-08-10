const express =require("express")
const router = express.Router()
const{ Createinfo,
  allinfo,
  getsingle}=require('../controllers/carinfo')

router.post('/',Createinfo)
router.get('/',allinfo)
router.get('/:id',getsingle)








module.exports =router