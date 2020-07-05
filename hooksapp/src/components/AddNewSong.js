import React, { useState } from "react";

const AddNewSong = ({ addSongs }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addSongs(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add new Song</label>
      <input
        value={title}
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input type="submit" value="Add song" />
    </form>
  );
};

export default AddNewSong;
