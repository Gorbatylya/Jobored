import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import FavouritesPage from "../page/FavouritePage/FavouritePage";
import HomePage from "../page/HomePage/HomePage";
import JobInfo from "../page/JobInfo/JobInfo";


const AppRouter = () => {
 
  return (
    <Routes>
      <Route index path="home" element={<HomePage />} />
      <Route path="favourites" element={<FavouritesPage />} />
      <Route path="jobInfo" element={<JobInfo />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
