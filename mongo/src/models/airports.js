import mongoose from "mongoose";
import Int32 from "mongoose-int32";
const { Schema, connection } = mongoose;

const airports_schema = new Schema({
  id: Int32,
  ident: String,
  type: String,
  name: String,
  latitude_deg: Number,
  longitude_deg: Number,
  elevation_ft: Int32,
  continent: String,
  iso_country: String,
  iso_region: String,
  municipality: String,
  scheduled_service: String,
  gps_code: String,
  iata_code: String,
  local_code: String,
  home_link: String,
  wikipedia_link: String,
  keywords: String,
  tags: [String],
});

airports_schema.index({ ident: 1 });
const flights_db = connection.useDb("flights");
const airports_model = flights_db.model("Airports", airports_schema);
export default airports_model;
