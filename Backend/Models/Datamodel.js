import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

const Data=mongoose.model('Data', DataSchema);
export default Data;
