import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
    const navigate = useNavigate();
  const initialState = { imageurl: "", name: " ", price: " ", quantity:" "};
  const [data, setData] = useState(initialState);
  const [imageSrc, setImageSrc] = useState(""); // State for the image source

  const handleChangeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicked..", data);
    
    // Update the image source state
    setImageSrc(data.imageurl);

    // Make the POST request
    axios.post("http://localhost:3000/home", data);

    // alert("Product Added Successfully");
  };

  return (
    <div>
       <div className="text-center">
        <div
          style={{
            border: "2px black solid",
            width: "300px",
            marginLeft: "500px",
            marginTop: "50px",
            backgroundColor: "lightgreen",
          }}
        >
          {imageSrc && (
        <div className="text-center">
          <h2>Image Preview:</h2>
          <img src={imageSrc} alt="Product" style={{ width: "100px", height: "100px" }} />
        </div>
      )}
          <h1>Add Products</h1>
          <label>Imageurl:</label>
          <br></br>
          <input
            type="text"
            name="imageurl"
            placeholder="Enter image"
            value={data.imageurl}
            onChange={handleChangeInput}
          />{" "}
          <br></br>
          <label>Name:</label>
          <br></br>
          <input
            type="text"
            name="name"
            placeholder="Enter product Name "
            value={data.name}
            onChange={handleChangeInput}
          ></input>
          <br />
          <label>Price:</label>
          <br />
          <input
            type="text"
            name="price"
            placeholder="Enter price"
            value={data.price}
            onChange={handleChangeInput}
            max={5}
          ></input>
          <br />
          <label>Size</label>
          <br />
          <input
            type="text"
            name="quantity"
            value={data.quantity}
            onChange={handleChangeInput}
          />
          <br />
          <button
            onClick={handleClick}
            className="m-3 btn btn-secondary text-center"
          >
            ADD
          </button>
        </div>
      </div>

    </div>
  )
}

export default AddProducts
