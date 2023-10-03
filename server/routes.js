const homepage = require ("../Controller/home_controller")
const routes={
    "/":{
        method: "GET",
        handler:homepage.index
    },
    "/about":{
        method:"POST",
        handler:(req,res)=>{
            res.end("this is about page");
        },
    },
};
const router= (req,res)=>{
    const{url,method}=req;

    const route= routes[url];
    if(!route){
        res.writeHead(404);
        res.end("404 not found");
        return;
    }
    if(method !== route.method){
        res.writeHead(405);
        res.end("405 method not allowed");
        return;
    }

    route.handler(req,res);
};
module.exports=router