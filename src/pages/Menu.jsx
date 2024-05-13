import React from "react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const navigate = useNavigate();
  const [id, brandId] = useState("");

  const brandName = (e) => {
    brandId(e.target.value);
  };
  return (
    <>
      <h1>Menu Page</h1>

      <input type="text" value={id} onChange={(e) => brandName(e)}></input>
      <button onClick={() => navigate(`/product/${id}`)}>
        브랜드 페이지로 이동
      </button>
    </>
  );
};

export default Menu;
