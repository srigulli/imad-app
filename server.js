var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   'articleone' : {
    title : 'ArticleOne | Sridhar Gullipalli',
    heading: 'ArticleOne',
    date: '1st March 2018',
    content: `<p>
           This is the content of my First Article. This is the content of my first Article
         </p>
         <p>
           This is the content of my First Article
         </p>`
              },
   'articletwo' : {
    title : 'ArticleTwo | Sridhar Gullipalli',
    heading: 'ArticleTwo',
    date: '3rd March 2018',
    content: `<p>
           This is the content of my Second Article. This is the content of my Second Article
         </p>
         <p>
           This is the content of my Second Article
         </p>`
    
                },
  'articlethree' : {
    title : 'ArticleThree | Sridhar Gullipalli',
    heading: 'ArticleThree',
    date: '4th March 2018',
    content: `<p>
           This is the content of my Third Article. This is the content of my Third Article
         </p>
         <p>
           This is the content of my Third Article
         </p>`
    
                } 
};
function createTemplate (data) {
    var title =data.title;
    var date =data.date;
    var heading = data.heading;
    varcontent =data.heading;
    var htmlTemplate = `
    <html>
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
         <div>  
            ${content}
         </div>
        </div>
      </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
;;
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
