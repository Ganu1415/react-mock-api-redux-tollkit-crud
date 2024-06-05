import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// create Data
export const createUser= createAsyncThunk("createUser", async(data,{rejectWithValue})=>{
   
  const rep=await axios.post("https://665db952e88051d60407fed6.mockapi.io/crud",data)
  try{
     return rep.data
  }catch(error){
   return rejectWithValue(error)
  }
})
// showData
export const showUser= createAsyncThunk("showUser", async(data,{rejectWithValue})=>{
   
    const rep=await axios.get("https://665db952e88051d60407fed6.mockapi.io/crud")
    try{
       return rep.data
    }catch(error){
     return rejectWithValue(error)
    }
  })
   // deleteUser
   export const deleteUser = createAsyncThunk("deleteuser", async (id,{rejectWithValue}) => {

    try {
        const response = await axios.delete(`https://665db952e88051d60407fed6.mockapi.io/crud/${id}`)

        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})
// UpdateUser
export const updateUser = createAsyncThunk("update/user", async (data,{rejectWithValue}) => {
    console.log(data.id)
    try {
        const response = await axios.put(`https://665db952e88051d60407fed6.mockapi.io/crud/${data.id}`, {
            ...data
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

const userDetailSlice = createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null,
        searchData: [],
    },
    reducers: {
        SearchUser:(state,action)=>{
           state.searchData=action.payload
        }
   },
    extraReducers: (builder) => {
        // create Data
        builder.addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload); // Assuming payload is the new user data
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        // showData
        builder.addCase(showUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(showUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload; // Assuming payload is the new user data
        });
        builder.addCase(showUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });


        // deleteUserData
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
         
            state.users= state.users.filter((item)=>(
                item.id !== action.payload.id 
            )); // Assuming payload is the new user data
            
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        // updateUserData
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users= state.users.map((item)=>(
                item.id === action.payload.id ? action.payload : item
            )); // Assuming payload is the new user data
            
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
       
    }
})
export const {SearchUser}=userDetailSlice.actions;
export default userDetailSlice.reducer;

