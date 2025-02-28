import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './../src/store/userSlice'

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    changeCount(state, id) {
      let tmp = state.findIndex((e)=>e.id == id.payload);
      state[tmp].count++;
    },
    addItem(state, action) {
      let tmp = state.findIndex((e)=>e.id == action.payload.id);
      if (tmp == -1) {
        state.push(action.payload);
      }
      else {
        state[tmp].count++;
      }
    },
    deleteItem(state, action) {
      let tmp = state.findIndex((e)=>e.id == action.payload.id);
      state.splice(tmp, 1);
    }
  }
})
export let { changeCount, addItem, deleteItem } = cart.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
   }
}) 