import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users';
import authorReducer from '../features/author';
import postReducer from '../features/posts';

export const store = configureStore({
  reducer: {
    users: userReducer,
    author: authorReducer,
    posts: postReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// /* eslint-disable @typescript-eslint/indent */
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
// /* eslint-enable @typescript-eslint/indent */
