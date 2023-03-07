import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value: 0
}
let counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {

            switch (true) {
                case (state.value < 10000): state.value += 1
                    break
            }


        },
        decrement: (state, action) => {
            switch(true){
                case(state.value != 0):
                state.value -= 1
            }

        },
        clearAll: (state, action) => {
            console.log("clear call")

        },
    }
})


export const { increment, decrement, clearAll } = counterSlice.actions
export { counterSlice }