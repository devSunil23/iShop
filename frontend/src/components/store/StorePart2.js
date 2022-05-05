import React from "react";
import GridOnIcon from "@mui/icons-material/GridOn";
import MenuIcon from "@mui/icons-material/Menu";
const StorePart2 = () => {
  return (
    <>
      <div className="storePart2">
        <div className="storePart2left">
          <div className="itemCounts">13 items</div>
          <div className="sortBy">
            <label htmlFor="sortBy">Sort By</label>
            <select name="sort" id="sortBy">
              <option value="0">Name</option>
              <option value="1">Price</option>
            </select>
          </div>
          <div className="showItem">
            <label htmlFor="show">Show</label>
            <select name="show" id="show">
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
              <option value="4">5</option>
              <option value="5">6</option>
              <option value="6">7</option>
              <option value="7">8</option>
              <option value="8">9</option>
              <option value="9">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="filterShow">
            <i class="fa-solid fa-filter"></i>
            <p className="filter">Filter</p>
          </div>
        </div>
        <div className="gridBar">
          <GridOnIcon
            style={{ height: 18, color: "#2e90e5", cursor: "pointer" }}
          />
          <MenuIcon style={{ height: 28, opacity: 0.5, cursor: "pointer" }} />
        </div>
      </div>
    </>
  );
};

export default StorePart2;
