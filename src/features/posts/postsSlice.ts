import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// TODO: Add a type for `Post` based on the API data (https://jsonplaceholder.typicode.com/posts)
// TODO: Add a type for the state structure and also use it in reducers.
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface PostsState {
  isLoading: boolean;
  posts: Post[];
  error: string | null;
}

const initialState: PostsState = {
  isLoading: false,
  posts: [],
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // TODO
    setPosts: (state, action) => {
      console.log('action', action);
      state.posts = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async (params, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      dispatch(setPosts(response.data));
      console.log('response', response);
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err));
      dispatch(setLoading(false));
    }
  }
);

export const { setLoading, setPosts, setError } = postsSlice.actions;
// Default export is the reducer.
export default postsSlice.reducer;
