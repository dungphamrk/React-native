import { Product } from '@/interface/index';
import { fetchAllProducts, fetchProductDetail } from '@/apis/products.apis';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ProductState {
  data: Product[];
  selected?: Product | null;
  status: 'IDLE' | 'PENDING' | 'FULFILLED' | 'FAILED';
  error?: string | null;
}

const initialState: ProductState = {
  data: [],
  status: 'IDLE',
  selected: null,
  error: null,
};

export const fetchAllProductsAsync = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'product/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllProducts();
      return response.data as Product[];
    } catch (error: any) {
      return rejectWithValue(error.message || 'Lỗi khi tải danh sách sản phẩm');
    }
  }
);

export const fetchProductDetailAsync = createAsyncThunk<Product, number, { rejectValue: string }>(
  'product/fetchProductDetail',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchProductDetail(id);
      return response.data as Product;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Lỗi khi tải chi tiết sản phẩm');
    }
  }
);

const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    resetSelected: (state) => {
      state.selected = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'PENDING';
        state.error = null;
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'FULFILLED';
        state.data = action.payload;
      })
      .addCase(fetchAllProductsAsync.rejected, (state, action) => {
        state.status = 'FAILED';
        state.error = action.payload || action.error.message || null;
      })

      .addCase(fetchProductDetailAsync.pending, (state) => {
        state.status = 'PENDING';
        state.error = null;
      })
      .addCase(fetchProductDetailAsync.fulfilled, (state, action) => {
        state.status = 'FULFILLED';
        state.selected = action.payload;
      })
      .addCase(fetchProductDetailAsync.rejected, (state, action) => {
        state.status = 'FAILED';
        state.error = action.payload || action.error.message || null;
      });
  },
});

export const { resetSelected } = productSlice.actions;
export default productSlice.reducer;
