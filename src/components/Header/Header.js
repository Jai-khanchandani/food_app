import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="headerContainer">
        <div style={{ width: "18.9vw" }}>
          <div
            style={{
              marginBottom: "0.8rem",
              height: "3vh",
              marginLeft: "7rem",
              marginTop: "0.8rem",
              width: "10vw",
              backgroundColor: "#CDCDCD",
              borderRadius: "5rem",
              textAlign: "center",
              paddingTop: "0.2rem"
            }}
          >
            Brooklyn, NY
          </div>
        </div>
        <div
          style={{ backgroundColor: "black", width: "0.1rem", opacity: "0.2" }}
        ></div>

        <div style={{ width: "80vw", display: "flex" }}>
          <input
            style={{
              height: "1.5rem",
              paddingLeft: "2rem",
              marginLeft: "2rem",
              width: "50vw",
              marginTop: "0.8rem"
            }}
            type="text"
            id="topping"
            name="topping"
            placeholder="What do you want to eat?"
            label="label"
          />
          <input
            style={{
              backgroundColor: "#CDCDCD",
              borderRadius: "3rem",
              height: "1.5rem",
              marginLeft: "2rem",
              marginTop: "0.8rem",
              width: "5vw"
            }}
            type="button"
            id="topping"
            name="topping"
            value="Search"
            label="label"
          />
        </div>
        
      </div>
    </>
  );
}

export default Header;
