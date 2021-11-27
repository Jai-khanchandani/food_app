import React from "react";
import "./sidebar.css";

function SideBar() {
  return (
    <div className="sidebarContainer">
      <hr style={{ opacity: "0.3" }} />
      <h4 style={{ paddingLeft: "3rem" }}>Filters</h4>
      <ul>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="openNow"
          label="label"
        />{" "}
        {"Open Now"}{" "}
      </ul>
      <ul>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="mostPopularPlaces"
        />
        {" Most Popular Places "}
      </ul>
      <ul>
        <input type="checkbox" id="topping" name="topping" value="bestRated" />
        {" Best Rated "}
      </ul>
      <ul>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="fastDelivery"
        />
        {" Fast Delivery "}
      </ul>
      <ul>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="cheapDelivery"
        />
        {" cheap Delivery "}
      </ul>
      <ul>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="mostPoporderswithBonusesularPlaces"
        />
        {" Orders with Bonuses "}
      </ul>
      <ul style={{ marginLeft: "4rem", color: "blue" }}>
        <span>More(12)</span>
      </ul>
      <hr style={{ opacity: "0.5" }} />
      <h4 style={{ paddingLeft: "3rem" }}>Cusine</h4>
      <ul>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="openNow"
          label="label"
        />{" "}
        {"All"}{" "}
      </ul>
      <ul>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="mostPopularPlaces"
        />
        {" Chinese "}
      </ul>
      <ul>
        <input type="checkbox" id="topping" name="topping" value="bestRated" />
        {" Mexican"}
      </ul>
      <ul>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="fastDelivery"
        />
        {" American "}
      </ul>
      <ul>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="cheapDelivery"
        />
        {" Italian "}
      </ul>
      <ul style={{ marginLeft: "4rem", color: "blue" }}>
        <span>More(24)</span>
      </ul>
    </div>
  );
}

export default SideBar;
