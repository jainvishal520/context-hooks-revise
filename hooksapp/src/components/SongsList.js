import React, { useState } from "react";
import { v4 } from "uuid";
import AddNewSong from "./AddNewSong";
const SongsList = () => {
  // useState function takes initial state as an argument and returns an array
  // - 1st value is actual data i.e piece of state and 2nd value is a function to edit that state

  // We can use array destructuring here
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);

  const addSongs = (title) => {
    setSongs([...songs, { title, id: v4() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <AddNewSong addSongs={addSongs} />
    </div>
  );
};

export default SongsList;
