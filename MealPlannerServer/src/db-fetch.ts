import mongoose from 'mongoose';
import Resource = require('./models/resource');
import "dotenv/config";


const newResource = new Resource({
  _id: new mongoose.Types.ObjectId(),
  name: "Ahoj",
  units: {"name": "g", "grammage":"1"},
  energy: 10,
  prot: 10,
  carb: 10,
  fat: 10,
  fib: 10,
  allergens: "al1",
  category: "cat1"
})

// // SAVE NEW
// newResource.save()
// .then((result:any) => {console.log(result)})
// .catch((err:any) => {console.log(err)})

// // FIND

// // REMOVE
// Resource.findByIdAndRemove("5eadce9a81883900ee1ecf7c")
// .exec()
// .then((result:any) => {console.log("REMOVE", result)})
// .catch((err:any) => console.log("REMOVE", err))
