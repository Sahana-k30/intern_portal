const mongoose= require("mongoose");
const user= require("./user")

const sampleData= [
    {
        name:"sahana",
        code:1202,
        donation:12230
    },
    {
        name:"rohithaa",
        code:2303,
        donation:45000
    },
    {
        name:"srujan",
        code:1505,
        donation:34920
    },
    {
        name:"roshan",
        code:4100,
        donation:31021
    }
]
user.insertMany(sampleData);

mongoose.connect('mongodb://127.0.0.1:27017/Shecan')
  .then(() => console.log('Connected!'));
