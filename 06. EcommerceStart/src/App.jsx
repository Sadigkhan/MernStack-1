import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/products/Products";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    let newArr = data.filter((product) => {
      return product.title.toLowerCase().startsWith(query.toLocaleLowerCase());
    });
    console.log(newArr)
    setData(newArr);
  };
  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <>
      <Header setQuery={setQuery} />
      <Products data={data} setData={setData} />
    </>
  );
}

export default App;
