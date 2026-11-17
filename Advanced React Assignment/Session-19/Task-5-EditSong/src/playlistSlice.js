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
    }
  ],

  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },

    editSong: (state, action) => {
      const song = state.find(
        (song) => song.id === action.payload.id
      );

      if (song) {
        song.title = action.payload.title;
        song.artist = action.payload.artist;
      }
    },

    deleteSong: (state, action) => {
      return state.filter(
        (song) => song.id !== action.payload
      );
    }
  }
});

export const {
  addSong,
  editSong,
  deleteSong
} = playlistSlice.actions;

export default playlistSlice.reducer;