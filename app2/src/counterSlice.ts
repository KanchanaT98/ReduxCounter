import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isParameterPropertyDeclaration } from 'typescript';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;  
    },
    resetCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;  
    }
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;