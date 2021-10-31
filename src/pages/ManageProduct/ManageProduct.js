import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {


  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://ghastly-flesh-65618.herokuapp.com//services')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleDelete
    = id => {
      const url = `https://ghastly-flesh-65618.herokuapp.com/services/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount) {
            alert('Are You Ready to Delate')
            const remaining = products.filter(product => product._id !== id)
            setProducts(remaining)
          }

        })
    }

  return (
    <div>
      <div className="container mx-auto bg-blue-50">
        <div className=" text-center mb-20 ">
          <h1 className="lg:text-5xl sm:text-3xl text-5xl font-bold title-font mb-4 text-yellow-600">Manage product</h1>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        </div>
        {
          products.map(product => <div className='py-2' key={product._id}>
            <img className='mx-auto' src={product.img} alt="" />
            <h3 className='text-2xl font-bold'>{product.name}</h3>
            <h3 className='text-2xl font-bold'>${product.price}</h3>
            <button className='font-bold px-5 py-2 bg-yellow-600 text-white rounded-full' onClick={() => handleDelete(product._id)}>Delete</button>
          </div>)
        }
      </div>
      <Link to="/home"><button className="rounded-full mx-auto my-5 font-bold bg-black text-white">Back to Home</button></Link>
    </div>
  );
};

export default ManageProduct;