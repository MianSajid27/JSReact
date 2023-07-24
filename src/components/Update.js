import React, { useEffect, useState } from "react";

function Update() {
  const [users, setUser] = useState([]);
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [Id, setId] = useState(null);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch("https://dummyjson.com/products").then((result) => {
      result.json().then((resp) => {
        // console.warn("result",resp)
        setUser(resp.products);
        console.warn("result", users);
        setBrand(resp[0].brand);
        setTitle(resp[0].title);
        setStock(resp[0].stock);
        setId(resp[0].id);
      });
    });
  }
  console.warn(users);
  function deleteUser(id) {
    fetch(`https://dummyjson.com/products/ ${id} `, {
      method: "",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }
  function selectUser(id) {
    let item = users[id - 1];
    setBrand(item.brand);
    setTitle(item.title);
    setStock(item.stock);
    setId(item.id);
  }

  function updateUser() {
    let item = { brand, title, stock, Id };
    console.warn("item", item);
    fetch(`https://dummyjson.com/products/${Id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }
  return (
    <div className="get">
      <h1 className="text-center">Update Api </h1>

      <table border="1" style={{ float: "left" }}>
        <thead>
          <tr>
            <td>ID</td>
            <td>BRAND</td>
            <td>TITLE</td>
            <td>STOCK</td>
            <td>DELETE</td>
            <td>UPDATE</td>
          </tr>
        </thead>
        {users.map((item, i) => (
          <tbody>
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.brand}</td>

              <td>{item.title}</td>
              <td>{item.stock}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(item.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => selectUser(item.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div>
        <input
          type="text"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
}

export default Update;
