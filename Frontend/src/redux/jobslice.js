import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  allJobs: [],
  allAdminJobs: [], // This will hold
  singleJob: null, // This will hold the job details when a user clicks on a job
  searchJobByText: "",
  allAppliedJobs: [], // This will hold
  searchedQuery: "",
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setAllJobs(state, action) {
      state.allJobs = action.payload; // Update state with fetched jobs
    },
    setSingleJob(state, action) {
      state.singleJob = action.payload; // Update state with fetched job details
    },
    setAllAdminJobs(state, action) {
      state.allAdminJobs = action.payload; // Update state with fetched admin jobs
    },
    setSearchJobByText(state, action) {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs(state, action) {
      state.allAppliedJobs = action.payload;
    },
    setSearchedQuery(state, action) {
      state.searchedQuery = action.payload;
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
} = jobSlice.actions;
export default jobSlice.reducer;

// ✅ Memoized Selectors - prevents returning new array references on same data
const selectJobsRoot = (state) => state.job;

// Memoized selector for allJobs - returns same reference if data hasn't changed
export const selectAllJobs = createSelector(
  [selectJobsRoot],
  (jobsRoot) => jobsRoot.allJobs
);

// Memoized selector for allAdminJobs
export const selectAllAdminJobs = createSelector(
  [selectJobsRoot],
  (jobsRoot) => jobsRoot.allAdminJobs
);

// Memoized selector for singleJob
export const selectSingleJob = createSelector(
  [selectJobsRoot],
  (jobsRoot) => jobsRoot.singleJob
);

// Memoized selector for searchJobByText
export const selectSearchJobByText = createSelector(
  [selectJobsRoot],
  (jobsRoot) => jobsRoot.searchJobByText
);

// Memoized selector for allAppliedJobs
export const selectAllAppliedJobs = createSelector(
  [selectJobsRoot],
  (jobsRoot) => jobsRoot.allAppliedJobs
);

// Memoized selector for searchedQuery
export const selectSearchedQuery = createSelector(
  [selectJobsRoot],
  (jobsRoot) => jobsRoot.searchedQuery
);
