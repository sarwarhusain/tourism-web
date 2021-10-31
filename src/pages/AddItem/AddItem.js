import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddItem.css'
import { Link } from 'react-router-dom';

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://ghastly-flesh-65618.herokuapp.com/itemDelivery', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('added successfully');
          reset();
        }
      })
  }

  return (
    <div className="add-item bg-gray-100 bg-opacity-50 ">
      <h2 className="text-yellow-800 text-3xl font-bold">Please Add Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
        <input {...register("price",)} placeholder="price" />

        <input {...register("img",)} placeholder="image" />
        <input className="text-2xl rounded-full text-yellow-700 font-bold" type="submit" />
        <br />
        <Link to="/home"><button>Back to Home</button></Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </form>
    </div>
  );
};

export default AddItem;


// <br/><br/><br/><br/><br/>