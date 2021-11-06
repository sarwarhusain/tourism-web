import React, { useEffect, useState, Link } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './VerifyItem.css'

const VerifyItem = () => {
  const { verifyId } = useParams();
  const [item, setItem] = useState({})
  const email = sessionStorage.getItem("email");
  // const email = useAuth();

  useEffect(() => {
    fetch(`https://ghastly-flesh-65618.herokuapp.com/services/${verifyId}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, []);


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.email = email;
    fetch("https://ghastly-flesh-65618.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),

    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  return (
    <div className="bg-yellow-200 verify-item container px-10 py-24 mx-auto flex items-center gap-80 ">
      <div className="col-md-6">
        <div className="">
          <img className="w-50" src={item.img} alt="" />

        </div>
        <h1 className="text-danger font-bold">Name:{item.name}</h1>
        <h1 className="text-danger font-bold">Price:{item.price}$</h1>
      </div>
      <div className="col-md-6 verify-ite bg-gray-500 bg-opacity-50 ">
        <h2 className="text-yellow-500 text-3xl font-bold">Delivery Information</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 20 })}
            defaultValue={item.name}
            placeholder="name" />

          <input {...register("email",)}
            placeholder="Email" />

          <input {...register("price",)}
            defaultValue={item.price}
            placeholder="price" />

          <input {...register("image",)}
            defaultValue={item.img}
            placeholder="image" />
          <input className="text-2xl rounded-full text-yellow-700 font-bold hover:bg-green-600" type="submit" />
          <br />

        </form>
      </div>
    </div>

  );
};

export default VerifyItem;


// <h2 className="text-2xl font-bold text-black">Product id: {verifyId}</h2>
//   <Link to="/home"><button>Submit</button></Link>
// fetch("https://ghastly-flesh-65618.herokuapp.com/orderConfirm", {
//   method: "POST",
//   headers: { "content-type": "application/json" },
//   body: JSON.stringify(data),
// })
//   .then((res) => res.json())
//   .then((result) =>
//     console.log(result));
// console.log(data);
// }