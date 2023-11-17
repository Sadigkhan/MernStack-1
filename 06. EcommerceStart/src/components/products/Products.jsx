import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function Products({data,setData}) {
  
  const getData = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let datas = await res.json();
    setData(datas)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
    {data.map((item)=>{
      return <Product item={item} key={item.id}/>
    })}
       
    </div>
  );
}
