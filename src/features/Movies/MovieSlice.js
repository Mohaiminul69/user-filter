import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genres: [],
  currentPage: 1,
  pageSize: 4,
  sortColumn: { path: "title", order: "asc" },
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

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleDelete: (state, { payload }) => {
      console.log("delete o hoise");
      state.movies = state.movies.filter((m) => m._id !== payload._id);
    },
    handleLike: (state, { payload }) => {
      const index = state.movies.indexOf(payload);
      //   state.movies[index].liked = !state.movies[index].liked;
      console.log("hoise");
    },
    handlePageChange: (page) => {
      this.setState({ currentPage: page });
    },
    handleGenreChange: (genre) => {
      this.setState({ selectedGenre: genre, currentPage: 1 });
    },
    handleSort: (sortColumn) => {
      this.setState({ sortColumn });
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

export const {
  handleDelete,
  handleLike,
  handlePageChange,
  handleGenreChange,
  handleSort,
} = movieSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default movieSlice.reducer;