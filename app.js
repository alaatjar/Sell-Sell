const express = require('express')
const app = express()
const port = 3005 
app.set('view engine', 'ejs')
app.use(express.static('public'))


//for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});



app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/MyCart", (req, res) => {
  res.render("MyCart");
});

app.get("/ContactUs", (req, res) => {
  res.render("ContactUs");
});

app.get("/Electronics", (req, res) => {
  res.render("Electronics");
});

app.get("/AboutUs", (req, res) => {
  res.render("AboutUs");
});


app.get("/hi", (req, res) => {
  res.send("Hi");
});

// app.get("/index", (req, res) => {
//   res.render("index");
// });

  //404
app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
  });


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })