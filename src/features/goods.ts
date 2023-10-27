import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
    add: (state, action: PayloadAction<string>) => { state.goods.push(action.payload) },
    take: (state, action: PayloadAction<string>) => {
      state.goods = state.goods.filter(good => good !== action.payload);
    },
    clear: (state) => {
      state.goods = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      state.goods = action.payload;
      state.loading = false;
    })
    builder.addCase(init.rejected, (state) => {
      state.error = 'Error';
      state.loading = false;
    })
  },
})

export const { add, take, clear } = goodsSlice.actions;

export default goodsSlice.reducer;

// export const oldInit = () => {
//   return (dispatch: Dispatch) => {
//     dispatch(setLoading(true));

//     fetchGoods()
//       .then((goodsFromServer) => {
//         dispatchEvent(set(goodsFromServer));
//       })
//       .catch(() => {
//         dispatch(setError('Something went wrong'));
//       })
//       .finally(() => {
//         dispatch(setLoading(false));
//       })
//   }
// };

export const init = createAsyncThunk('goods/fetch', () => ['']); //fetchGoods()