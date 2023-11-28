var http=require('http')
http.createServer(serverfun).listen(5000)

function serverfun(req,res)
{
    res.write("successfully simple server will be created")
    res.end()
}