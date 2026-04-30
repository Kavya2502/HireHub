import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useNavigate } from "react-router-dom";
import { selectAllJobs } from "@/redux/jobslice";
import { selectUser } from "@/redux/authSlice";

const Home = () => {
  const { loading, error } = useGetAllJobs();

  const jobs = useSelector(selectAllJobs);
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, [user, navigate]); // ✅ FIXED

  return (
    <div>
      <Header />
      <Categories />

      {loading && <p>Loading jobs...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <LatestJobs jobs={jobs} />}

      <Footer />
    </div>
  );
};

export default Home;