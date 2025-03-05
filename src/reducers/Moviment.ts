import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../type/generic";
import { FinantialCard, Moviment } from "../type/moviment";
import movimentService from "../service/movimentService";

interface MovimentState {
  isLoading: boolean;
  message: string;
  moviment: Moviment;
  moviments: Moviment[];
  finantialCard: FinantialCard[];
}

const initialState: MovimentState = {
  isLoading: false,
  message: "",
  moviment: {
    userReference: "",
    type: "" as CardType,
    name: "",
    value: 0,
  },
  moviments: [],
  finantialCard: [],
};

export const addMoviment = createAsyncThunk(
  "moviment/add",
  async (moviment: Moviment): Promise<void> => {
    await movimentService.addMoviment(moviment);
  }
);

export const getMoviments = createAsyncThunk(
  "moviment/get",
  async (): Promise<Moviment[]> => {
    const response = await movimentService.getMoviments();

    return response.docs.map((doc) => {
      const moviment = doc.data() as Moviment;

      return moviment;
    });
  }
);

export const fillFinantialCard = (movimentList: Moviment[]) => {
  let incomeValue = 0;
  let expenseValue = 0;
  let currentCard = 0;
  movimentList.forEach((moviment) => {
    if (moviment.type === CardType.INCOME) {
      incomeValue += Number(moviment.value);
    } else {
      expenseValue += Number(moviment.value);
    }
  });
  currentCard = incomeValue - expenseValue;

  return [
    { type: CardType.CURRENT, value: currentCard },
    { type: CardType.INCOME, value: incomeValue },
    { type: CardType.EXPENSES, value: expenseValue },
  ];
};

const movimentSlice = createSlice({
  name: "moviment",
  initialState,
  reducers: {
    addMoviment: (state, action: PayloadAction<Moviment>) => {
      state.moviments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addMoviment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addMoviment.fulfilled, (state) => {
      state.isLoading = false;
      state.message = "Moviment added";
    });
    builder.addCase(addMoviment.rejected, (state) => {
      state.isLoading = false;
      state.message = "Error";
    });
    builder.addCase(getMoviments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMoviments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.moviments = action.payload;

      state.finantialCard = fillFinantialCard(action.payload);
    });
    builder.addCase(getMoviments.rejected, (state) => {
      state.isLoading = false;
      state.message = "Error";
    });
  },
});

export default movimentSlice.reducer;
