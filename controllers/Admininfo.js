const Admin =require('../models/Admin')
const bcrypt = require('bcryptjs');
// app.post('/admin/create', async (req, res) => {


const createAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the email already exists
 try {
    const admin = await Admin.findOne({email:email});
    if (admin) {
      return res.status(400).json('Email already exists');
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
  
    // Create the admin
    const aadmin = new Admin({
      name,
      email,
      password: hashedPassword
      
    });
    await aadmin.save();
  
    // Return the success message
   res.status(200).json({message:"created"})
 } catch (error) {
    console.log(error)
 }
};
module.exports={
    createAdmin
}