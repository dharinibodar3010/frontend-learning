import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",

  initialState: [
    {
      id: 1,
      title: "Perfect",
      artist: "Ed Sheeran"
    },
    {
      id: 2,
      title: "Calm Down",
      artist: "Rema"
    },
    {
      id: 3,
      title: "Shape of You",
      artist: "Ed Sheeran"
    }
  ],

  reducers: {
    deleteSong: (state, action) => {
      return state.filter(
        (song) => song.id !== action.payload
      );
    }
  }
});

export const { deleteSong } = playlistSlice.actions;

export default playlistSlice.reducer;