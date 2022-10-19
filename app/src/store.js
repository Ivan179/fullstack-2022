import { configureStore } from '@reduxjs/toolkit';

import { blogsReducer } from './slices/blogs';
import { modalReducer } from './slices/modal';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    modal: modalReducer,
  },
});
