import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  units: Object,
  energy: String,
  prot: String,
  carb: String,
  fat: String,
  fib: String,
  allergens: Array,
  category: Array
},{ collection: 'resources'})
var Resource : mongoose.Model<any> = mongoose.model("Resource",resourceSchema)
export = Resource
