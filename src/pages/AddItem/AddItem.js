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
    <div className="bg-yellow-200 container add-item bg-opacity-50 mx-auto  items-center ">
      <h2 className="text-yellow-800 text-3xl font-bold">Please Add Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
        <input {...register("price",)} placeholder="price" />

        <input {...register("img",)} placeholder="image" />
        <input className="text-2xl rounded-full text-yellow-700 font-bold hover:bg-green-600" type="submit" />
        <br />
        <Link to="/home"><button className="text-white font-bold bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Back to Home</button></Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </form>
    </div>
  );
};

export default AddItem;


// <br/><br/><br/><br/><br/>