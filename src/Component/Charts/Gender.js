import React from "react";

function Gender() {
  return (
    <div id="Gender">
      <div id = 'gender-block' className = 'flex'>
      <div className="gender-content flex" >
        <div className = 'flex'>
          <h3>Ümumi</h3>
          <span>75</span>
        </div>
      </div>
      <div className="gender-content flex">
        <div className = 'flex'>
          <h3>Kişi</h3>
          <span>35</span>
        </div>
      </div>
      <div className="gender-content flex">
        <div className = 'flex'>
          <h3>Qadın </h3>
          <span>40</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Gender;
