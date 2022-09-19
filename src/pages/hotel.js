import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formconfig } from "../constant/config";

const InnerHotel = () => {
  return (
    <>
    < InnerHotelPage/>
    </>
  );
};

const InnerHotelPage = () => {
    const [Facility, setFacility] = useState([]);
  //get request for eminities
  useEffect(() => {
const newFacilities = async () => {
    try {
      const response = await axios.get(`http://895a-103-174-85-54.ngrok.io/hotels/emenities/`);
      setFacility(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  newFacilities();
}, []);
  const [hotel, sethotel] = useState();
  const [RoomNamePic, setRoomNamePic] = useState();
  const [desc, setDesc] = useState();
  const[price, setPrice] = useState();
  const [room, setRoom] = useState();
  const [AllFacility, setAllFacility] = useState("");
  const handleImage = (e) => {
    setRoomNamePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("image", RoomNamePic);
    formdata.append('hotel_name',hotel);
    formdata.append('hotel_description', desc);
    formdata.append('types_of_room',room);
    formdata.append('price',price);
    formdata.append('emenities', AllFacility);  
    const Config = { Formconfig };
    await axios
      .post(`http://895a-103-174-85-54.ngrok.io/hotels/hotel/`, formdata, Config)
      .then((res) => {
     console.log(res.data);
      })
      .catch((err) => {
      console.log(err);
      });
  };
  return (
    <div className="form">
    <div className="form-box">
     <label className="name">Hotel Name</label>
     <input type="text" name="hotel_name" id="hotel_name" value={hotel} onChange={(e)=>sethotel(e.target.value)} className="detail-name-box" />
     </div>
     <div  className="form-box">
     <label className="name">Hotel description</label>
     <input type="textarea" name="hotel_description" id="hotel_description" value={desc} onChange={(e)=>setDesc(e.target.value)}  className="detail-name-box"  />
     </div>
     <div  className="form-box">
     <label className="name">Hotel Image</label>
     <input type="file" name="hotel_image" onChange={handleImage}  className="detail-name-box" />
     </div>
     <div  className="form-box">
     <label className="name"> Price</label>
     <input type="number" name="price" id="price" value={price} onChange={(e)=>setPrice(e.target.value)}  className="detail-name-box" />
     </div>
    <div  className="form-box">
     <label className="name">RoomType</label>
     <input type="text" name="types_of_room" id="types_of_room" value={room} onChange={(e)=>setRoom(e.target.value)}  className="detail-name-box"  />
     </div>
    <div  className="form-box">
     <label className="name">Room Name*</label>
    <select onChange={(e)=>setAllFacility(e.target.value)}  className="detail-name-box"  >
        <option>PLease Select a Emenities</option>
                    {Facility &&
                      Facility.map((data) => (
                        <option value={data.emenities}>
                            {data.name}
                        </option>
                    ))}
    </select>
    </div>
    <div>
        <button onClick={handleSubmit} className="submit">Submit</button>
    </div>
    
    </div>
  );
};

export default InnerHotel;
