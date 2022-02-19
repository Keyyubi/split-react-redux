import { configureStore } from '@reduxjs/toolkit'
import draggerSlice from './feature/draggerSlice'

export default configureStore({
  reducer: { 
    dragger: draggerSlice,
  },
})