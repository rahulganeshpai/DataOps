import mongoose from "mongoose";
import Int32 from "mongoose-int32";
const { Schema, connection } = mongoose;

const frequencies_schema = new Schema({
  id: Int32,
  airport_ref: String,
  airport_ident: String,
  type: String,
  description: Number,
  frequency_mhz: Number,
  tags: [String],
});

frequencies_schema.index({ ident: 1 }, { unique: true });
const flights_db = connection.useDb("flights");
const frequencies_model = flights_db.model("frequencies", frequencies_schema);
export default frequencies_model;
