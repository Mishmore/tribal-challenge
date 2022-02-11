import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosHelper from '@helpers/axios'

const initialState = {
  businessList: [],
  businessDetail: {},
  status: 'idle',
  error: '',
}

export const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    setBusinessDetail: (state, action) => {
      state.businessDetail = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBusiness.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getBusiness.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.businessList = action.payload.businesses
      })
      .addCase(getBusiness.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getBusinessDetail.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.businessDetail = action.payload
      })
  },
})

export const { setBusinessDetail } = businessSlice.actions

export default businessSlice.reducer

export const selectBusinessList = (state) => state.business.businessList

export const selectBusinessDetail = (state) => state.business.businessDetail

export const selectBusinessListStatus = (state) => state.business.status

export const getBusiness = createAsyncThunk(
  'business/getBusiness',
  async () => {
    const response = await axiosHelper({ url: '/business', method: 'get' })
    return response.data
  }
)

export const getBusinessDetail = createAsyncThunk(
  'business/getBusinessDetail',
  async (businessId) => {
    const response = await axiosHelper({
      url: `/business/${businessId}`,
      method: 'get',
    })
    return response.data
  }
)

export const createBusiness = createAsyncThunk(
  'business/createBusiness',
  async (data) => {
    const response = await axiosHelper({
      url: '/business',
      method: 'post',
      data,
    })

    return response.data
  }
)

export const deleteBusiness = createAsyncThunk(
  'business/deleteBusiness',
  async (businessId) => {
    const response = await axiosHelper({
      url: `/business/${businessId}`,
      method: 'delete',
    })

    return response.data
  }
)

export const updateBusiness = createAsyncThunk(
  'business/updateBusiness',
  async ({ businessId, data }) => {
    const response = await axiosHelper({
      url: `/business/${businessId}`,
      method: 'put',
      data,
    })

    return response.data
  }
)
