import { configureStore } from '@reduxjs/toolkit';

import { blogsReducer } from './slices/blogs';
import { modalReducer } from './slices/modal';
import { userReducer } from './slices/user';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    modal: modalReducer,
    user: userReducer,
  },
});
