import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PayloadAction } from "@reduxjs/toolkit";

interface ICategorySlice {
  categoryId: string;
}

const initialState: ICategorySlice = {
  categoryId: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoryId: (state, action: PayloadAction<string>) => {
      state.categoryId = action.payload;
    },
  },
});

export const { getCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
