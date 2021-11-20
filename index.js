const http=require("http");
const fs=require("fs");
const port = 5000;

const server=http.createServer(req,res)=> {
  
  if (req.url=="/") {
    fs.readFile("./index.html", (err,data)=> {
      res.writeHead(300, {'Content-type':"text-html"});
      res.write(data);
      res.end();
    })
    
  }
  
  else if(req.url=="/video") {
    fs.readFile("./Lovely Video.mp4", (err,data)=> {
      if (!err) {
        res.writeHead(300, {'Content-type':"video/mp4"});
        res.write(data);
        res.end();
      }
      
    })
    
  }
  
  
  else if(req.url="/books") {
    res.wtiteHead(300, {'Content-type':"application/json"});
    res.writeHead(JSON.stringify({data:[{Name:"NODEJS", Author: "Anudeep", Publisher:"Edyoda"}]}));
    res.end();
  }
  
  else {
        res.writeHead(404);
        res.write("404 Not Found");
        res.end();
  }
});


server.listen(port,(err)=> {
      if(err) {
          console.log(err);
      }
        else {
              console.log('server is running on port ${port}')
        }
})
