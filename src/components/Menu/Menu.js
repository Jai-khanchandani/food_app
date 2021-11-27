import React, { useEffect, useState } from "react";
import "./menu.css";
import axios from "axios";

function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "./mockdata.json";
    axios.get(url).then((response) => setData(response.data));
  }, []);
  console.log(data);

  return (
    <div style={{}} className="menuContainer">
      <div
        style={{
          backgroundColor: "black",
          width: "0.08rem",
          opacity: "0.2",
          height: "80vh"
        }}
      ></div>
      <div style={{ width: "100vw" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ paddingLeft: "2rem" }}>Other Restaurants</h4>

          <input
            style={{
              height: "1rem",
              marginLeft: "55rem",
              paddingLeft: "0.5rem"
            }}
            type="text"
            placeholder="Name of restaurant"
          />
        </div>
        {/* <div style={{border: '1px solid green'}}>hi</div> */}

        {data.map((item) => {
          return (
            <div>
              <div
                style={{
                  width: "75vw",
                  marginLeft: "2rem",
                  paddingLeft: "2rem",
                  display: "flex",
                  backgroundColor: "#E0E0E0",
                  boxShadow: "1.5px 1.5px 5px 1px",
                  borderRadius: "0.3rem"
                }}
              >
                <img
                  style={{
                    width: "20rem",
                    height: "6rem",
                    borderRadius: "0.8rem"
                  }}
                  src={item.image}
                  alt="food"
                />
                <div style={{ width: "1rem" }}></div>
                <div style={{ width: "20rem" }}>
                  <h4 style={{ marginBottom: "0.1rem" }}>
                    {item.restaurantname}
                  </h4>
                  <span style={{ marginRight: "0.3rem" }}>
                    {item.cusine[0]}
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    {item.cusine[1]}
                  </span>
                  <span style={{}}>{item.cusine[2]}</span>
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      {item.arrivaltime} m
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    marginLeft: "35rem",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <span style={{ color: "red" }} className="fa fa-star">
                    {item.rating} pts.
                  </span>
                  <span style={{ marginTop: "2.5rem", fontWeight: "bold" }}>
                    {" "}
                    min. $20.00
                  </span>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
