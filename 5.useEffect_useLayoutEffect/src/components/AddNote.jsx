import React, { useState } from "react";

export default function AddNote({AddNew}) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    console.log(title,description)
    AddNew(title, description);
    setTitle("");
    setDesc("");
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmitBtn(e)}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        value={title}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
