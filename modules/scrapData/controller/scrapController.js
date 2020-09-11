const scrapService = require('./../services/scrapService')

async function fetchData(req,res){
  try {
    let url = req.body.url;
    const $ = await scrapService.xmlData(url);     //To Get Data in Parsed Form
    const htmlContent = $('meta');  // Extract meta tag
    let json          = {};
    for(let element in htmlContent) {   //Look through html and put all the data in json
      if(element && htmlContent[element].attribs && htmlContent[element].attribs.name) {
        if(json[htmlContent[element].attribs.name]) {  //If json key already exist then push in array
          if(Array.isArray(json[htmlContent[element].attribs.name])) {
            json[htmlContent[element].attribs.name].push(htmlContent[element].attribs.content);
          }
          else {
            let content = json[htmlContent[element].attribs.name];
            json[htmlContent[element].attribs.name] = [content];
            json[htmlContent[element].attribs.name].push(htmlContent[element].attribs.content);
          }
        } else {
          json[htmlContent[element].attribs.name] = htmlContent[element].attribs.content;
        }
      }
    }
    if(Object.keys(json).length==0){ // If there is no data in meta tag and og tag
      json["image"]=[];
      $('img').map(function(){
        if($(this).attr('src') ){
          json["image"].push($(this).attr('src'));
        } })
      $('img').map(function(){
        if($(this).attr('src') ){
          json["image"].push($(this).attr('src'));
        } });
      json["title"]=$('title').text();
      json["description"]=$('p').text()
    }
    res.send(json);
  }
  catch(e){
    res.send(e)
  }
}

exports.fetchData=fetchData;