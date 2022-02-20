import { createSlice } from '@reduxjs/toolkit'

export const draggerSlice = createSlice({
  name: 'dragger',
  initialState: {
    rows: [50, 50],
    cols: [
      [50, 50],
      [50, 50]
    ]
  },
  reducers: {
    rowResizer: (state, action) => {
      action.payload = action.payload.map(e => Math.round(e * 100) / 100)

      state.rows = action.payload
    },
    colResizer: (state, action) => {
      action.payload.values = action.payload.values.map(e => Math.round(e * 100) / 100)
      const arr = [...state.cols]

      for (let i = 0; i < arr.length; i++) {
        if (i === action.payload.rowIndex) {
          arr[i] = action.payload.values
        }
      }

      state.cols = arr
    }
  },
})

// Action creators are generated for each case reducer function
export const { rowResizer, colResizer } = draggerSlice.actions

export default draggerSlice.reducer