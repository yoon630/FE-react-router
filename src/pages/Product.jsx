import React from "react";
import { useParams } from "react-router-dom";

const data = {
  맘스터치: {
    title: "싸이버거 세트",
    price: "6,900원",
  },
  맥도날드: {
    title: "빅맥 세트",
    price: "7,200원",
  },
  롯데리아: {
    title: "데리버거 세트",
    price: "5,600원",
  },
  KFC: {
    title: "징거버거",
    price: "7,800원",
  },
  버거킹: {
    title: "통새우 와퍼 세트",
    price: "9,800원",
  },
};

const Product = () => {
  const { brandName } = useParams();

  return (
    <>
      <div>
        {data[brandName] ? (
          <div>
            <h1>{brandName}</h1>
            <p>{data[brandName].title}</p>
            <p>{data[brandName].price}</p>
          </div>
        ) : (
          "해당 브랜드의 제품을 찾을 수 없습니다."
        )}
      </div>
    </>
  );
};

export default Product;

// data[`${brandName}`].title data[`${brandName}`].price
