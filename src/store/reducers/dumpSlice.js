import { createSlice } from '@reduxjs/toolkit'

const dumpSlice = createSlice({
  name: 'dump',
  initialState: {
    selected: {},
    record: [],
    power: true,
    bank: true,
    loading: false,
    list: [],
    error: ''
  },
  reducers: {
    changePower(state, action) {
      state.power = action.payload
    },
    changeBank(state, action) {
      state.bank = action.payload
    },
    addSelected(state, action) {
      const { item } = action.payload
      state.selected = { ...item }
    },
    callApiStart(state, action) {
      state.loading = true
    },
    callApiSucess(state, action) {
      state.loading = false
      state.list = action.payload
    },
    callApFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { changePower, changeBank,
  addSelected, callApiStart, callApiSucess, callApFailed } = dumpSlice.actions
export default dumpSlice.reducer

export const fetchApi = () => async dispatch => {
  try {
    dispatch(callApiStart(true))
    const response = await fetch('https://5d2ea3bf2e225b0014208fa5.mockapi.io/api/gacha/news');
    const data = await response.json();
    console.log('data', data);
    dispatch(callApiSucess(data))

  } catch (error) {
    dispatch(callApFailed(error))
  }

}