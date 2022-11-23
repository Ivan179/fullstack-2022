import { createSlice } from '@reduxjs/toolkit';
import { schema, normalize } from 'normalizr';

const initialState = {
  blogIds: [],
  myblogIds: [],
  blogsObj: {},
  posts: {},
  comments: {},
  page: 1,
};

const userSchema = new schema.Entity('user');
const commentSchema = new schema.Entity('comments', { user: userSchema });
const postSchema = new schema.Entity('posts', {
  comments: [commentSchema],
  user: userSchema,
});
const blogSchema = new schema.Entity('blogs', {
  post_set: [postSchema],
  user: userSchema,
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    increasePage: (state) => {
      state.page = state.page + 1;
    },
    setBlogs: (state, action) => {
      const { entities, result } = normalize(action.payload, [blogSchema]);

      state.blogIds = result;
      state.blogsObj = { ...state.blogsObj, ...entities.blogs };
      state.posts = { ...state.posts, ...entities.posts };
      state.comments = { ...state.comments, ...entities.comments };
    },
    updateBlog: (state, action) => {
      const { entities, result } = normalize(action.payload, blogSchema);

      state.blogsObj = { ...state.blogsObj, [result]: entities.blogs[result] };
    },
    deleteBlog: (state, action) => {
      const blogId = action.payload;

      state.blogIds.splice(state.blogIds.indexOf(blogId), 1);
    },
    setBlogsMore: (state, action) => {
      const { entities, result } = normalize(action.payload, [blogSchema]);

      state.blogIds = [...state.blogIds, ...result];
      state.blogsObj = { ...state.blogsObj, ...entities.blogs };
      state.posts = { ...state.posts, ...entities.posts };
      state.comments = { ...state.comments, ...entities.comments };
    },

    setMyBlogs: (state, action) => {
      const { entities, result } = normalize(action.payload, [blogSchema]);

      state.blogIds = result;
      state.blogsObj = { ...state.myblogIds, ...entities.blogs };
      state.posts = { ...state.posts, ...entities.posts };
      state.comments = { ...state.comments, ...entities.comments };
    },
    setMyBlogsMore: (state, action) => {
      const { entities, result } = normalize(action.payload, [blogSchema]);

      state.blogIds = [...state.myblogIds, ...result];
      state.blogsObj = { ...state.blogsObj, ...entities.blogs };
      state.posts = { ...state.posts, ...entities.posts };
      state.comments = { ...state.comments, ...entities.comments };
    },
  },
});

export const blogsReducer = blogsSlice.reducer;
export const {
  setPage,
  setBlogs,
  setBlogsMore,
  increasePage,
  setMyBlogs,
  setMyBlogsMore,
  updateBlog,
  deleteBlog,
} = blogsSlice.actions;
