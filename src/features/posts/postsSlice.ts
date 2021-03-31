import { createSlice } from '@reduxjs/toolkit';

// TODO: Add a type for `Post` based on the API data (https://jsonplaceholder.typicode.com/posts)
// TODO: Add a type for the state structure and also use it in reducers.
const initialState = {
  isLoading: false,
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // TODO
  },
});

// Default export is the reducer.
export default postsSlice.reducer;
