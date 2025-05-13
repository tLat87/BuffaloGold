import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedArenas: [],
};

const arenasSlice = createSlice({
    name: 'arenas',
    initialState,
    reducers: {
        addArena: (state, action) => {
            state.savedArenas.push(action.payload);
        },
        removeArena: (state, action) => {
            state.savedArenas = state.savedArenas.filter(
                arena => arena.name !== action.payload
            );
        },
        clearArenas: (state) => {
            state.savedArenas = [];
        }
    },
});

export const { addArena, removeArena, clearArenas } = arenasSlice.actions;

export default arenasSlice.reducer;
