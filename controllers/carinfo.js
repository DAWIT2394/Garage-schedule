const car =require('../models/Car')
const Createinfo = async(req,res)=>{
    try {
        const{description,date,plate_number,phone_number,car_model,full_name,car_mantance,date_end,}=req.body
        if (!description ||  !plate_number || !phone_number|| !car_model ||!full_name||!car_mantance){
            res.status(400).json({error:'Please fill the field'})
        }
        const create = new car({
            description,date,plate_number,phone_number,car_model,full_name,car_mantance,date_end

        })
        await create.save();
        return  res.send({msg:'Data saved successfully'});

    } catch (error) {
        console.log(error)
        
    }
}
const allinfo = async(req,res)=>{
    try {
        const getall = await car.find({})
if (!getall){
    throw Error("No data found")
}
res.status(200).json(getall)
      

    } catch (error) {
        
    }
}
const getsingle =async(req,res)=>{
    try {
        const single = await car.findById({_id:req.params.id})
if(!single){
    throw Error("No data found")

}
res.status(200).json(single)
    } catch (error) {
        
    }

}
module.exports = {
    Createinfo,
    allinfo,
    getsingle
}