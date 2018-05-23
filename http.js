// send multipart and text data in http requests
// this example uses telegram bot api to send video in a chat
var request = require('request')
function uploadVideoToTelegram(path,caption,chat_id){
  return new Promise((resolve,reject)=>{
    let video = fs.createReadStream(path)
    var opts = {
      url: 'https://api.telegram.org/bot<TOKEN>/sendVideo',
      method: 'POST',
      json: true,
      formData: {
        video: video,
        chat_id : chat_id,
        caption : caption ,
      }
    
    };
    request.post(opts, function(err, httpResponse, body) {
    if (err) reject(err);
    resolve(body)
    
    })
  })
  }
  

//download and save a file from web
function download(url,filePath){
  return new Promise((resolve,reject)=>{
  filePath = basePath+'/public/videos/originals/'+filePath
  var file = fs.createWriteStream(filePath);
  var request = http.get(url, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close();
    console.log('file downloaded')
    resolve(filePath)
    
  });
});
})
}