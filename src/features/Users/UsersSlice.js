import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import user1 from "../../data/2627.json";
import user2 from "../../data/20566.json";
import user3 from "../../data/10780.json";
import user4 from "../../data/27366.json";
import user5 from "../../data/21632.json";
import user6 from "../../data/29127.json";
import user7 from "../../data/13116.json";
import user8 from "../../data/14842.json";
import user9 from "../../data/17172.json";
import user10 from "../../data/30024.json";
import user11 from "../../data/30332.json";
import user12 from "../../data/31870.json";
import user13 from "../../data/33550.json";
import user14 from "../../data/34407.json";
import user15 from "../../data/34429.json";
import user16 from "../../data/36495.json";
import user17 from "../../data/37327.json";
import user18 from "../../data/38639.json";

const initialState = {
  filterInput: "",
  allUserData: [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
    user11,
    user12,
    user13,
    user14,
    user15,
    user16,
    user17,
    user18,
  ],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    // const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addFilterInput: (state, { payload }) => {
      state.filterInput = payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { addFilterInput } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default userSlice.reducer;
