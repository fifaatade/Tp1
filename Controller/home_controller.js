const index=(req,res)=>{
    res.end("welcome to homepage ");
}

const store=(req,res)=>{
    res.end('this is store page')
}

module.exports ={index,store}