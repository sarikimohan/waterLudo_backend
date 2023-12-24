
const errorHandler = (err,req,res,next)=>{
  res.status(500).json({
    status:false,
    err:err.message || 'Internal Server Error'
  })
}

export default errorHandler