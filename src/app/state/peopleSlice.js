import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosHelper from '@helpers/axios'

const initialState = {
  people: [],
  status: 'idle',
  error: null,
  personDetail: null,
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPersonDetail: (state, action) => {
      state.personDetail = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPeople.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getPeople.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.people = action.payload.persons
      })
      .addCase(getPeople.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createPeople.fulfilled, (state) => {
        state.status = 'succeeded'
      })
  },
})

export const { setPersonDetail } = peopleSlice.actions

export default peopleSlice.reducer

export const selectPeople = (state) => state.people.people

export const selectPersonDetail = (state) => state.people.personDetail

export const selectPeopleStatus = (state) => state.people.status

export const getPeople = createAsyncThunk(
  'people/getPeople',
  async (businessId) => {
    const response = await axiosHelper({
      url: `/business/${businessId}/persons`,
      method: 'get',
    })
    return response.data
  }
)

export const createPeople = createAsyncThunk(
  'people/createPeople',
  async (data) => {
    const response = await axiosHelper({
      url: '/people',
      method: 'post',
      data,
    })

    return response.data
  }
)

export const deletePerson = createAsyncThunk(
  'people/deletePerson',
  async ({ businessId, personId }) => {
    const response = await axiosHelper({
      url: `/business/${businessId}/persons/${personId}`,
      method: 'delete',
    })

    return response.data
  }
)
