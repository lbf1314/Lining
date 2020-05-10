// 引入模板
let http = require("http");
let fs = require("fs");

// 创建服务器对象
let app = http.createServer((req,res)=>{
    let str = req.url=="/"?"/Lining/zhuye.html":"/Lining"+req.url;
    let html = fs.readFileSync("./dist"+str);
    res.write(html);
    res.end();
});

app.listen(3001,"localhost",(err)=>{
    if(!err){
        console.log("恭喜您，服务器启动成功………………");
    }
});