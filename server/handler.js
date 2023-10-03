const router= require("./routes")
const handler =(req,res)=>{
    //res.end(req.url);

    router(req,res);
    res.setHeader("Content-Type", "application/json");

    var body = '';
    req.on('data', function(data) {
        body += data;
    });

    req.on('end', function() {
        var requestData = JSON.parse(body);
        var nom = requestData.mot;
        var traduction = translate(nom);
        var response = { mot: nom, traduction: traduction };
        res.end(JSON.stringify(response));
    });
    
}
module.exports = handler;

