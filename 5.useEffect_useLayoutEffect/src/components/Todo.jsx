import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NoteList from "./NoteList";
import AddNote from "./AddNote";

export default function Todo() {
  const [todoes, setTodoes] = useState([]);

  useEffect(() => {
    console.log("loaded");
    const data = JSON.parse(localStorage.getItem("todolist"));
   
    if (data) {
      setTodoes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoes));
  }, [todoes]);

  const AddNew = (title, description ) => {
    setTodoes([
      ...todoes,
      {
        id: todoes.length + 1,
        title,
        description
      },
    ]);
  };

  return (
    <div className="w-[600px] bg-red-400 m-auto flex justify-center items-center flex-col">
      <Navbar />
      <NoteList todoes={todoes}/>
      <AddNote AddNew={AddNew} />
    </div>
  );
}




