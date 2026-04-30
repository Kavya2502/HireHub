import { createSlice, createSelector } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name:'application',
    initialState:{
        applicants:null,
    },
    reducers:{
        setAllApplicants:(state,action) => {
            state.applicants = action.payload;
        }
    }
});

export const {setAllApplicants} = applicationSlice.actions;
export default applicationSlice.reducer;
export const applicationReducer = applicationSlice.reducer;

// ✅ Memoized Selectors - prevents returning new object reference on same data
const selectApplicationRoot = (state) => state.application;

// Memoized selector for applicants
export const selectApplicants = createSelector(
  [selectApplicationRoot],
  (appRoot) => appRoot.applicants
);
