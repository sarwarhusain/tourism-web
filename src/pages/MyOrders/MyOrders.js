import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  const email = sessionStorage.getItem('email');
  const [orders, setOrders] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://ghastly-flesh-65618.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`https://ghastly-flesh-65618.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
        }
      });
    console.log(id);
  };

  return (
    <div>
      <h1>My orders </h1>

      <div className="">
        <div className="row container">
          {orders?.map((item) => (
            <div className="col-md-4">
              <div className=" border p-3">
                <div className="">
                  <img className="w-100" src={item?.image} alt="" />
                </div>

                <h6>{item?.name}</h6>
                <h4>{item?.model}</h4>
                <p>{item?.description}</p>
                <h3 className="text-danger"> Price :{item?.price}$</h3>
                <button
                  onClick={() => handleDelete(item?._id)}
                  className="bg-red-500 hover:bg-red-500 round-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyOrders;