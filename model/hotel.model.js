const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: [{ type: String, required: true }],
    description: { type: String, required: true },
    offered: [{
      free_parking: { type: Boolean, default: false },
      tv: { type: Boolean, default: false },
      dedicated_workspace: { type: Boolean, default: false },
      air_conditioning: { type: Boolean, default: false },
      wifi: { type: Boolean, default: false },
      washing_machine: { type: Boolean, default: false },
    }],
    standout_amenities: [{
      exercise_equipment: { type: Boolean, default: false },
      patio: { type: Boolean, default: false },
      bbq_grill: { type: Boolean, default: false },
      outdoor_shower: { type: Boolean, default: false },
      pool: { type: Boolean, default: false },
      hot_tub: { type: Boolean, default: false },
      fire_pit: { type: Boolean, default: false },
    }],
    describes_your_place: {
      hotel: { type: Boolean, default: false },
      apartment: { type: Boolean, default: false },
      house: { type: Boolean, default: false },
      flat: { type: Boolean, default: false },
    },
    room_status: {
      entire_house: { type: Boolean, default: false },
      shared_room: { type: Boolean, default: false },
      single_room: { type: Boolean, default: false },
    },
    gender: {type:String, enum:["male","female","both"], required:true},
    guests: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    beds: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    price_by: [
      {
        day: {
          type: String,
          enum: [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ],
        },
        hours: { type: Number },
        price: { type: Number, required: true },
      },
    ],
    set_price: {
      date_range: [Date],
      price: { type: Number, required: true },
    },
    location: {
      type: { type: String, default: "Point" },
      coordinates: { type: [Number], required: true },
    },
  },
  {
    versionKey: false,
  },
  {
    timestamps: true,
  }
);

hotelSchema.index({ location: "2dsphere" });

const HotelDetail = mongoose.model("hotel_details", hotelSchema);

module.exports = {
  HotelDetail,
};
