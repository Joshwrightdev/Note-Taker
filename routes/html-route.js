const fs= require('fs')
const path = require('path')

app.get('/notes'), function(req,res){
    res.sendFile(path.join(__dirname))
}