import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalData: null,
  modalName: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalData = action.payload.data;
      state.modalName = action.payload.name;
    },
    closeModal: (state) => {
      state.modalData = null;
      state.modalName = null;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
