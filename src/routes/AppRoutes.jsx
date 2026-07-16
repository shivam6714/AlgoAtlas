import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Algorithms from "../pages/Algorithms/Algorithms";
import Dashboard from "../pages/Dashboard/Dashboard";
import Category from "../pages/Category/Category";
import Topic from "../pages/Topic/Topic";

const Home = () => <h1>Home</h1>;
const Roadmap = () => <h1>Roadmap</h1>;
const Profile = () => <h1>Profile</h1>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="/algorithms" element={<Algorithms />} />

        <Route path="/category/:slug" element={<Category />} />

        <Route path="/topic/:slug" element={<Topic />} />

        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;