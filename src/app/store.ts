import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// TODO: These relative paths are bad.
import postsReducer from 'features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
