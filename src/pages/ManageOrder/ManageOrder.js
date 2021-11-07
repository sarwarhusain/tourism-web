import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch("https://ghastly-flesh-65618.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // const status = "apporved";
  const handleUitemate = (id) => {
    fetch(`https://ghastly-flesh-65618.herokuapp.com/uitemateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  };
  return (
    <div className="container">
      <h1>All orders {orders.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((item, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.image}</td>
              <td>
                <input
                  onChange={handleStatus}
                  type="text"
                  defaultValue={item.status}
                />
              </td>
              <button className="btn bg-danger p-2">Delete</button>
              <button
                onClick={() => handleUitemate(item._id)}
                className="btn bg-success p-2"
              >
                Uitemate
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrder;