var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone = {
    title : 'ArticleOne | Sridhar Gullipalli',
    heading: 'ArticleOne',
    date: '1st March 2018',
    content: `<p>
           This is the content of my First Article. This is the content of my first Article
         </p>
         <p>
           This is the content of my First Article
         </p>`
}
function createTemplate (data) {
    var title =data.title;
    var date =data.date;
    var heading = data.heading;
    varcontent =data.heading;
    var htmlTemplate = `<html>
      <head>
         <title>
           ${title}
         </title>
         <meta name ="viewport" content="width=device-width, intial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
      </head>
      <body>
        <div class="container">
         <div>
           <a href="/">Home</a>
         </div>
         <hr>
         <h3>
           ${heading}
         </h3>
         <div>
            ${date}
         </div>
            ${content}
        </div>
      </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//app.get('/articleone', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
//});
app.get('/articleone', function (req, res) {
    res.send(createTemplate(articleone));
});
app.get('/articletwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});
app.get('/articlethree', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
