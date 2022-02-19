import { createSlice } from '@reduxjs/toolkit'

export const draggerSlice = createSlice({
  name: 'dragger',
  initialState: {
    rows: [0, 0],
    cols: [
      [0, 0],
      [0, 0]
    ]
  },
  reducers: {
    rowResizer: (state, action) => {
      console.log('actri', action)

      state.rows = [0,0] //action.payload
    },
    colResizer: (state, action) => {
      const arr = [...state.cols]
      console.log('state1', state.cols)

      for (let i = 0; i < arr.length; i++) {
        if (i === action.payload.rowIndex) {
          arr[i] = action.payload.values
        }
      }
      state.cols = arr
      console.log('state2', state.cols)
    }
  },
})

// Action creators are generated for each case reducer function
export const { rowResizer, colResizer } = draggerSlice.actions

export default draggerSlice.reducer