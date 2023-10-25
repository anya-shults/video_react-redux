import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type GoodState = {
  goods: string[];
  loading: boolean;
  error: string,  
};

const initialState: GoodState = {
  goods: [],
  loading: false,
  error: '',
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    set: (state, action:PayloadAction<string[]>) => {
      state.goods = action.payload;
    },
    add: (state, action: PayloadAction<string>) => { state.goods.push(action.payload) },
    take: (state, action: PayloadAction<string>) => {
      state.goods = state.goods.filter(good => good !== action.payload);
    },
    clear: (state) => {
      state.goods = [];
    },
  }
})

export const { actions } = goodsSlice;

export default goodsSlice.reducer;
