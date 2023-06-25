import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    login:false,
    email:'',
    name:'',
    id:''
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        Authorization:(state,action)=>{
            state.login = action.payload.login
            state.email = action.payload.email
            state.name =action.payload.name
            state.id =action.payload.id
        }
    }
})

export const {Authorization} = userSlice.actions; 

export default userSlice.reducer;