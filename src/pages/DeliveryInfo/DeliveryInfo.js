import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const DeliveryInfo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="add-item bg-gray-100 bg-opacity-50 ">
      <h2 className="text-yellow-800 text-3xl font-bold">Delivery Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
        <input {...register("price",)} placeholder="price" />

        <input {...register("img",)} placeholder="image" />
        <input className="text-2xl rounded-full text-yellow-700 font-bold" type="submit" />
        <br />
        <Link to="/home"><button>Submit</button></Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </form>
    </div>
  );
};

export default DeliveryInfo;