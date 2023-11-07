// eslint-disable-next-line no-unused-vars
import React from "react";
import Note from "./Note";

// eslint-disable-next-line react/prop-types
export default function NoteList({ todoes }) {
  // eslint-disable-next-line react/prop-types
  return todoes.length > 0 ? (
    // eslint-disable-next-line react/prop-types
    todoes.map((item) => {
      return <Note key={item.id} item={item} />;
    })
  ) : (
    <h1>Empty list</h1>
  );
}
