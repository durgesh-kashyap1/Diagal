const axios = require("axios");
const cheerio =require('cheerio')

exports.xmlData=xmlData;

async function xmlData(url) {
  let result=await axios.get(url);
  return cheerio.load(result.data);
};