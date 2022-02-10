import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loader: false,
  modalCreateBusiness: false,
  modalEditBusiness: false,
  modalConfirmDeleteBusiness: false,
  modalCreatePerson: false,
  modalEditPerson: false,
  modalConfirmDeletePerson: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    handleLoader: (state, action) => {
      state.loader = action.payload
    },
    handleModalCreateBusiness: (state, action) => {
      state.modalCreateBusiness = action.payload
    },
    handleModalEditBusiness: (state, action) => {
      state.modalEditBusiness = action.payload
    },
    handleModalConfirmDeleteBusiness: (state, action) => {
      state.modalConfirmDeleteBusiness = action.payload
    },
    handleModalCreatePerson: (state, action) => {
      state.modalCreatePerson = action.payload
    },
    handleModalEditPerson: (state, action) => {
      state.modalEditPerson = action.payload
    },
    handleModalConfirmDeletePerson: (state, action) => {
      state.modalConfirmDeletePerson = action.payload
    },
  },
})

export const {
  handleLoader,
  handleModalCreateBusiness,
  handleModalEditBusiness,
  handleModalConfirmDeleteBusiness,
  handleModalCreatePerson,
  handleModalEditPerson,
  handleModalConfirmDeletePerson,
} = uiSlice.actions

export default uiSlice.reducer

export const selectLoader = (state) => state.ui.loader

export const selectModalCreateBusiness = (state) => state.ui.modalCreateBusiness

export const selectModalEditBusiness = (state) => state.ui.modalEditBusiness

export const selectModalConfirmDeleteBusiness = (state) =>
  state.ui.modalConfirmDeleteBusiness

export const selectModalCreatePerson = (state) => state.ui.modalCreatePerson

export const selectModalEditPerson = (state) => state.ui.modalEditPerson

export const selectModalConfirmDeletePerson = (state) =>
  state.ui.modalConfirmDeletePerson
