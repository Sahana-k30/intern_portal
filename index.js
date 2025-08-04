const express= require('express');
const mongoose= require("mongoose");
const app=express();
const ejs=require("ejs");
const path=require("path");
const port=3000;
const User=require('./models/user')

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded(true));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/login',(req,res)=>{
    res.render("login.ejs");
})

app.post('/login', async (req, res) => {
  const name = req.body.name;
  try {
    const intern = await User.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } });

    if (intern) {
      res.redirect(`/dashboard/${intern._id}`);
    } else {
      res.render('login', { error: 'Intern not found. Please try one from the demo data.' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('An error occurred during login.');
  }
});


app.get('/dashboard/:internId', async (req, res) => {
  try {
    const intern = await User.findById(req.params.internId);
    if (intern) {
      res.render('dashboard', { intern });
    } else {
      res.status(404).send('Intern not found.');
    }
  } catch (error) {
    console.error('Error fetching dashboard:', error);
    res.status(500).send('An error occurred.');
  }
});

app.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ donation: -1 });
    res.render('leaderboard', { leaderboard });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).send('An error occurred.');
  }
});


mongoose.connect('mongodb://127.0.0.1:27017/Shecan')
  .then(() => console.log('Connected!'));

app.listen(port,()=>{
    console.log('server is running');
})
