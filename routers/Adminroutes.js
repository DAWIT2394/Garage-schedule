const express =require("express")
const router = express.Router()

const {createAdmin} =require('../controllers/Admininfo')

router.post('/create',createAdmin ) 



module.exports = router
