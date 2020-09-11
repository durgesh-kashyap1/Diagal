const app= require('express')();

global.app=app;

require('./middleware');
require('./modules');

//Creating Express Server
app.listen(3000,()=>{
  console.log("EXPRESS SERVER RUNNING")
});