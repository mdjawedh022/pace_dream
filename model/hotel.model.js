const mongoose=require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: [{ type: String, required: true }],
    description: { type: String, required: true },
    offered: [
      {
        free_parking: { type: Boolean, required: true },
        tv: { type: Boolean, required: true },
        dedicated_workspace: { type: Boolean, required: true },
        air_conditioning: { type: Boolean, required: true },
        wifi: { type: Boolean, required: true },
        washing_machine: { type: Boolean, required: true },
      },
    ],
    standout_amenities: [
      {
        exercise_equipment: { type: Boolean, required: true },
        patio: { type: Boolean, required: true },
        bbq_grill: { type: Boolean, required: true },
        outdoor_shower: { type: Boolean, required: true },
        pool: { type: Boolean, required: true },
        hot_tub: { type: Boolean, required: true },
        patio: { type: Boolean, required: true },
        fire_fit: { type: Boolean, required: true },
      },
    ],
    describes_your_place: [
      {
        hotel: { type: Boolean, required: true },
        apartment: { type: Boolean, required: true },
        house: { type: Boolean, required: true },
        flat: { type: Boolean, required: true },
      },
    ],
    room_status: [
      {
        entire_house: { type: Boolean, required: true },
        shared_room: { type: Boolean, required: true },
        single_room: { type: Boolean, required: true },
      },
    ],
    gender: [
      {
        male: { type: Boolean, required: true },
        female: { type: Boolean, required: true },
        both_can_stay: { type: Boolean, required: true },
      },
    ],
    guests: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    beds: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    hours: { type: Number },
    days: [
      {
        monday: { type: Number },
        tuesday: { type: Number },
        wednesday: { type: Number },
        thursday: { type: Number },
        friday: { type: Number },
        saturday: { type: Number },
        sunday: { type: Number },
      },
    ],
    set_price: { type: Number, required: true },
    location: {
      type: { type: String, default: "Point" },
      coordinates: { type: [Number], required: true },
    },
  },
  {
    versionKey: false,
  }
);
hotelSchema.index({ location: "2dsphere" });


const hotelModel = mongoose.model("Hotel_Details", hotelSchema);

module.exports={
    hotelModel
}