import { useEffect, useState } from "react";
import Test from "./components/Test";
import Todo from "./components/Todo";

function App() {

  //1. ilk yarananda 1 defe isleyir
  // useEffect(() => {
  //   console.log("useEffect isledi");
  //   fetch("https://jsonplaceholder.typicode.com/users").catch;
  // }, []);

  //2. state ebagli olarag isleyir
  // useEffect(() => {
  //   console.log("useEffect state ile isledi");
  //   fetch("https://jsonplaceholder.typicode.com/users").catch;
  // }, [query]);

  //3. component destroy olarken isleyir
  // useEffect(() => {
  //   return () => {
  //     console.log("useEffect destroy oldu");
  //   };
  // }, []);

  //4. no dependency
  // useEffect(() => {
  //   console.log("no dependency ");
  // });

  return (
    <>
    <Todo/>
    </>
  );
}

export default App;
