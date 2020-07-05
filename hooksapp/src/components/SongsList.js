import React, { useState, useEffect } from "react";
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

  const [age, setAge] = useState(20);
  //   useEffect function takes a callback function ... and this callback func runs everytime the component renders or re-renders
  //   -typically use for calling API end point

  useEffect(() => {
    console.log("Use effect ran", songs);
  }, [songs]);
  // Watcher on songs - Adding songs to array here will only call this callback fn when songs changes and not on age data change

  useEffect(() => {
    console.log("Use effect ran", age);
  }, [age]);

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
      <button onClick={() => setAge(age + 1)}>Add 1 to age {age}</button>
    </div>
  );
};

export default SongsList;
