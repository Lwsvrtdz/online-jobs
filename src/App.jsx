import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ViewAllJobs from "./components/ViewAllJobs";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import JobPage, {jobLoader} from "./pages/JobPage.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />}></Route>
      <Route path="/jobs/create" element={<AddJobPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader}></Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
