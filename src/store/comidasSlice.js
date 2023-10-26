
import { createSlice  }  from '@reduxjs/toolkit';

export const comidasSlice = createSlice({
    name: 'comidas',
    initialState: {
        foods: [
           // tempEvent
        ],
        activeFood: null
    },
    reducers: {
        onLoadFood: (state, {payload}) => {
            payload.forEach(element => {
                state.foods.push(element);
            });
        }
    }
    //https://www.themealdb.com/
});

export const { onLoadFood } = comidasSlice.actions;