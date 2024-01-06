const express = require("express");
const { hotelModel, HotelDetail } = require("../model/hotel.model");

const hotelRouter = express.Router();

hotelRouter.post("/post", async (req, res) => {
  try {
    const {
      name,
      image,
      description,
      offered,
      standout_amenities,
      describes_your_place,
      room_status,
      gender,
      guests,
      bedrooms,
      beds,
      bathrooms,
      hours,
      days,
      set_price,
      location,
    } = req.body;
    const hotelData = new HotelDetail(req.body
    //   {
    //   name,
    //   image,
    //   description,
    //   offered,
    //   standout_amenities,
    //   describes_your_place,
    //   room_status,
    //   gender,
    //   guests,
    //   bedrooms,
    //   beds,
    //   bathrooms,
    //   hours,
    //   days,
    //   set_price,
    //   location,
    // }
    );
    await hotelData.save();
    res.send({ msg: "data send successsfully!😊", hotelData });
  } catch (err) {
    res.send({ msg: "Internal server error", error: err.message });
  }
});
// ....................get hotel data............................

hotelRouter.get("/", async (req, res) => {
  try {
    const hotels = await HotelDetail.find();
    res.send(hotels);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = { hotelRouter };
