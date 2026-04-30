import { createSlice, createSelector } from "@reduxjs/toolkit";
const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: {}, // Initialize with an empty object
    companies: [],
    searchCompanyByText: "",
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSearchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
  },
});

export const { setSingleCompany, setCompanies,  setSearchCompanyByText } = companySlice.actions;

export default companySlice.reducer;

export { companySlice };

// ✅ Memoized Selectors - prevents returning new array/object references on same data
const selectCompanyRoot = (state) => state.company;

// Memoized selector for companies array
export const selectCompanies = createSelector(
  [selectCompanyRoot],
  (companyRoot) => companyRoot.companies
);

// Memoized selector for singleCompany object
export const selectSingleCompany = createSelector(
  [selectCompanyRoot],
  (companyRoot) => companyRoot.singleCompany
);

// Memoized selector for searchCompanyByText
export const selectSearchCompanyByText = createSelector(
  [selectCompanyRoot],
  (companyRoot) => companyRoot.searchCompanyByText
);
