import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchUser = createAsyncThunk("cart/fetchUser", async (id) => {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     return response.data
// })

const INITIAL_STATE = {
    cartList: [],
    userDetail: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        updateUser: (state, action) => {
            state.userDetail.push(action.payload)
        },
        addToCart: (state, action) => {
            const itemExist = state.cartList.find(item => item.id === action.payload.id)
            if (itemExist) {
                state.cartList.forEach(item => {
                    if(item?.id === action.payload.id){
                        item.count=1;
                    }
                })
                return;
            } 
            state.cartList.push({
                ...action.payload,
                    count: 1
            })            
        },
        increment: (state, action) => {
            const productID = action.payload
            state.cartList.forEach(item => {
                if(item?.id === productID){
                    item.count++;
                }
            })
        },
        decrement: (state, action) => {
            const productID = action.payload
            state.cartList.forEach(item => {
                if(item?.id === productID){
                    item.count--;
                }
            })
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(fetchUser.pending, (state, action) => {})
    //     .addCase(fetchUser.fulfilled, (state, action) => {
    //         state.userDetail.push(action.payload)
    //     })
    //     .addCase(fetchUser.rejected, (state, action) => {})
    // },
})

export const {increment, decrement, addToCart, updateUser} = cartSlice.actions

export default cartSlice.reducer;