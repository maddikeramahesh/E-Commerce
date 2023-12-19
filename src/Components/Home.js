import React from "react";
import "./Head.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Head = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const [user, setData] = useState([]);
  const [editedData, setEditedData] = useState({
    imageurl: "",
    name: "",
    price: "",
    quantity: "",
  }); // Fixed Quantity
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/home")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEditFormChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = () => {
    if (selectedProductId) {
      axios
        .put(`http://localhost:3000/home/${selectedProductId}`, editedData)
        .then((res) => {
          console.log("Product updated:", res.data);
          setIsEditing(false);
          alert("The Edited Product Saved Successfully"); // Move alert here
        })
        .catch((err) => {
          console.error("Error updating product:", err);
        });
    }
  };

  const handleEditClick = (product) => {
    setEditedData(product);
    setSelectedProductId(product.id);
    setIsEditing(true);
    // alert("The Items are Edited");
  };

  const handleDeleteClick = (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/home/${productId}`)
        .then((res) => {
          console.log("Product deleted:", res.data);
        })
        .catch((err) => {
          console.error("Error deleting product:", err);
        });
    }
  };
  return (
    <>
      <div className="row head">
        <div
          className="col-md-5 col-sm-12 text-primary fs-5 "
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div style={{ paddingTop: "14px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              fill="currentColor"
              class="bi bi-bag-check-fill m-1"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
            </svg>
            My Cart
          </div>
          {/* <img className=""
            src={img1}
            alt="logo"
            style={{ height: "80px", width: "150px", paddingTop: "px", borderRadius:"50%"}}
          ></img> */}
          <div style={{ paddingTop: "16px" }}>
            <input
              type="search"
              placeholder="Search for Products, Brands and More"
              className="p-1 col-12"
              style={{ width: "370px", backgroundColor: "lightblue" }}
            ></input>
          </div>
        </div>
        <div
          className="col-md-7 col-sm-12"
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Nav className="na" style={{ paddingTop: "10px" }}>
            <Nav.Item>
              <Nav.Link
                className="link"
                href="/home"
                style={{ textDecoration: "none" }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="link"
                href="/men"
                style={{ textDecoration: "none" }}
              >
                Men
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="link"
                href="/women"
                style={{ textDecoration: "none" }}
              >
                Women
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="link"
                href="/kids"
                style={{ textDecoration: "none" }}
              >
                Kids
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="link"
                href="/fashion"
                style={{ textDecoration: "none" }}
              >
                Fashions
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item >
            <Nav.Link className='link' href="/more">
              More
            </Nav.Link>
          </Nav.Item> */}
          </Nav>
          <div
            className=""
            style={{
              width: "100px",
              height: "40px",
              display: "flex",
              justifyContent: "space-between",
              display: "inline",
              marginTop: "10px",
            }}
          >
            {/* <div>
       <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-cart3 m-1" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
Cart
        </div>  */}
          </div>

          <div
            className=""
            style={{ display: "flex", justifyContent: "", marginRight: "30pxpx" }}
          >
            <div
              style={{
                paddingTop: "8px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  fill="currentColor"
                  class="bi bi-person-circle m-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg> */}

              <div style={{ paddingTop: "5px" }}>
                <div className="dropdown-container">
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      fill="currentColor"
                      class="bi bi-person-circle m-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                    User
                    <span
                      className={`arrow-icon ${
                        isDropdownVisible ? "arrow-up" : "arrow-down"
                      }`}
                    >
                      &#9660;
                    </span>
                  </button>
                  {isDropdownVisible && (
                    <div
                      className="dropdown-content"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Nav.Link
                        href="/"
                        className="text-primary"
                        style={{ textDecoration: "none" }}
                      >
                        <h5>Login</h5>
                      </Nav.Link>
                      <Nav.Link
                        href="/signup"
                        className="text-primary"
                        style={{ textDecoration: "none" }}
                      >
                        <h5>Signup</h5>
                      </Nav.Link>
                      <Nav.Link
                        href="/addproducts"
                        className="text-primary"
                        style={{ textDecoration: "none" }}
                      >
                        <h5>Add</h5>
                      </Nav.Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* <div style={{ paddingTop: "5px" }}>
              <Nav.Link href="/login" ><button className="log" style={{padding:"8px", borderRadius:"10px"}}>Login</button></Nav.Link> 
            </div> */}
          </div>
        </div>
      </div>

      <div
        className="row text-center"
        style={{
          border: "1px solid black",
          backgroundColor: "#e3f3ff",
          paddingTop: "10px",
          marginRight:"0px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          className="col-md-6 col-sm-12 col-xs-12"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
          
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/790b539a57f7b8cd.png?q=100"
                alt="Mahesh"
                style={{ width: "70px", height: "70px" }}
              ></img>
           
            <p>Top Offers</p>
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/444802d58a814f57.png?q=100"
              alt="Mahesh"
              style={{ width: "70px", height: "70px" }}
            ></img>
            <p>
              Mobiles & <br /> Tablets
            </p>
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/ce3744f59fadb72e.png?q=100"
              alt="Mahesh"
              style={{ width: "70px", height: "70px" }}
            ></img>
            <p>Electronic</p>
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/5b8ad952a656b015.png?q=100"
              alt="Mahesh"
              style={{ width: "70px", height: "70px" }}
            ></img>
            <p>
              TV & <br /> Applications
            </p>
          </div>
          <div>
            
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/e4b01f3d783c49a1.png?q=100"
              alt="Mahesh"
              style={{ width: "70px", height: "70px" }}
            ></img>
            <p>Fashion</p>
          </div>
        </div>
        <div
          className="col-md-6 col-sm-12 col-xs-12"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/9e4acc1d8929bcc6.png?q=100"
              alt="Mahesh"
              style={{ width: "70px", height: "70px" }}
            ></img>
            <p>Beauty</p>
          </div>

          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/9ba7be5608413886.png?q=100"
              alt="Mahesh"
              style={{ width: "70px", height: "70px" }}
            ></img>
            <p>
              Home & <br />
              Kitchen
            </p>
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/dc9cb4d7bd005f70.png?q=100"
              alt="Mahesh"
              style={{ width: "70px", height: "70px" }}
            ></img>
            <p>Furniture</p>
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/683d71deb68235d5.png?q=100"
              alt="Mahesh"
              style={{ width: "70px", height: "70px" }}
            ></img>
            <p>Flights</p>
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/280a9406b5a7fdc8.png?q=100"
              alt="Mahesh"
              style={{ width: "70px", height: "70px" }}
            ></img>
            <p>Groucry</p>
          </div>
        </div>
      </div>
      <div className="">
        <Carousel fade>
          <Carousel.Item>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6dc87a00d0b27bbe.jpg?q=20"></img>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0f7a623a0d2d3093.jpg?q=20"></img>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2c7142dcb842dc4b.jpeg?q=20"></img>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/09158220c9cec620.jpeg?q=20"></img>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2a7604f5df2cd496.jpg?q=20"></img>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/fa0fd4e0c363e28b.jpg?q=20"></img>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="pt-3" style={{ backgroundColor: "#87CEFA" }}>
        <div className="product">
          <div className="container">
            <div className="row">
              {user?.map((pro) => (
                <div className="col" key={pro.id}>
                  <div
                    className="card mb-3 mt-3"
                    style={{ width: "250px", height: "370px" }}
                  >
                    <div style={{ width: "", height: "", margin: "10px" }}>
                      <img
                        src={pro.imageurl}
                        alt={pro.name}
                        style={{ width: "220px", height: "250px" }}
                      />
                    </div>
                    <div className="text-center">
                      <h6>{pro.name}</h6>
                      <p style={{ color: "green" }}>Price: {pro.price}</p>
                      <p style={{ color: "red" }}> {pro.quantity}</p>{" "}
                      {/* Fix Quantity */}
                    </div>
                    <div className="d-flex justify-content-between m-2">
                      <Link to="/products">
                        {" "}
                        {/* Fix Link */}
                        {/* <button type='button' onClick={() => handleEditClick(pro)} className='btn btn-info'>Edit</button> */}
                      </Link>
                      {/* <button type='button' onClick={() => handleDeleteClick(pro.id)} className='btn btn-primary'>Delete</button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-3 p-3" style={{backgroundColor:"#ADD8E6"}}>
        <div className="col-5 col-xsm-12 col-sm-12 col-md-12 col-lg-5 col-xlg-5">
          <div className=" d-flex justify-content-between">
            <div className="col pb-3">
              <div class="card" style={{ width: "220px", height: "290px" }}>
                <img
                  className="p-3 "
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/v/h/s-pm542136-pepe-jeans-original-imagsy2cptu3fhtz.jpeg?q=70"
                  alt="..."
                  style={{ width: "220px", height: "220px" }}
                />
                <div class="card-body text-center">
                  <h6>Men T-shirts</h6>
                  <b> ₹ 999</b>
                </div>
              </div>
            </div>
            <div className="col pb-3">
              <div class="card" style={{ width: "220px", height: "290px" }}>
                <img
                  className="p-3 "
                  src="https://rukminim2.flixcart.com/image/612/612/jzhb24w0/sari/g/6/7/free-kara115-red-sariya-original-imafjhscv8aak6gs.jpeg?q=70"
                  alt="..."
                  style={{ width: "220px", height: "220px" }}
                />
                <div class="card-body text-center">
                  <h6>Women Sarees</h6>
                  <b> ₹ 1,999</b>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-between">
            <div className="col pb-3">
              <div class="card" style={{ width: "220px", height: "290px" }}>
                <img
                  className="p-3 "
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/w/y/3/3-4-years-multi-fabmytra-original-imagc3gcyjymgubh.jpeg?q=70"
                  alt="..."
                  style={{ width: "220px", height: "220px" }}
                />
                <div class="card-body text-center">
                  <h6>Boy Dress</h6>
                  <b> ₹ 799</b>
                </div>
              </div>
            </div>
            <div className="col pb-3">
              <div class="card" style={{ width: "220px", height: "290px" }}>
                <img
                  className="p-3 "
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/p/d/a/7-8-years-1021-brwn-ultinity-original-imagsrzh8aqazk8p.jpeg?q=70"
                  alt="..."
                  style={{ width: "220px", height: "220px" }}
                />
                <div class="card-body text-center">
                  <h6>Girl Dress</h6>
                  <b> ₹ 599</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 col-xsm-12 col-sm-12 col-md-12 col-lg-7 col-xlg-7">
          <img
            src="data:image/jpg;base64,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"
            style={{ width: "100%", height: "600px" }}
          ></img>
        </div>
      </div>
      <div className="" style={{backgroundColor:"black", color:"white", width:"100%", height:"400px", marginRight:"0px",}}>
       <div className="text-center " style={{display:'flex', justifyContent:"space-around", paddingTop:"100px", flexDirection: "row", justifyContent:"center", gap:"40px"}}>
        <Nav.Link href="/home" style={{textDecoration:"none"}}>Home</Nav.Link>
        <Nav.Link href="/men" style={{textDecoration:"none"}}>Men</Nav.Link>
        <Nav.Link href="/women" style={{textDecoration:"none"}}> Women</Nav.Link>
        <Nav.Link href="/kids" style={{textDecoration:"none"}}> Kids</Nav.Link>
        <Nav.Link href="/fashion" style={{textDecoration:"none"}}> Fashion</Nav.Link>
       </div>
       <div className="text-center" style={{paddingTop:"100px"}}>
       Copyright ©2023 - 2024 Learn With Mahesh, Inc. All rights reserved
       </div>
      </div>
    </>
  );
};

export default Head;
