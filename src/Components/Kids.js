import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Kids = () => {
    const [user, setData] = useState([]);
  const [editedData, setEditedData] = useState({ imageurl: '', name: '', price: '', quantity: '' }); // Fixed Quantity
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/kids')
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
      axios.put(`http://localhost:3000/kids/${selectedProductId}`, editedData)
        .then((res) => {
          console.log('Product updated:', res.data);
          setIsEditing(false);
          alert("The Edited Product Saved Successfully"); // Move alert here
        })
        .catch((err) => {
          console.error('Error updating product:', err);
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
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/kids/${productId}`)
        .then((res) => {
          console.log('Product deleted:', res.data);
        })
        .catch((err) => {
          console.error('Error deleting product:', err);
        });
    }
  };
  return (
    <div>
       <div className='pt-3'style={{backgroundColor:"#FFFFE0"}}>
        <div className='product'>
          <div className='container'>
            <div className='row'>
              {user?.map((pro) => (
                <div className='col' key={pro.id}>
                  <div className='card mb-3 mt-3' style={{width:"250px", height:"370px"}}>
                    <div style={{ width: "", height: "", margin: "10px" }}>
                      <img src={pro.imageurl} alt={pro.name} style={{width:"220px", height:"250px"}} />
                    </div>
                    <div className="text-center">
                      <h6>{pro.name}</h6>
                      <p style={{color:"green"}}>Price: {pro.price}</p>
                      <p style={{color:"red"}}> {pro.quantity}</p> {/* Fix Quantity */}
                    </div>
                    <div className='d-flex justify-content-between m-2'>
                      <Link to="/products"> {/* Fix Link */}
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
    </div>
  )
}

export default Kids;

